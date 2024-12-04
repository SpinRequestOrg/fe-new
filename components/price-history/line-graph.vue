<template>
  <ClientOnly>
    <Line :data="data" :options="chartOptions" />
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import type { PriceHistory } from "~/types/event";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement
);

const props = defineProps<{
  history?: PriceHistory[];
  type: "song" | "hype" | "both";
}>();

const normalizedPriceTimes = computed(() => {
  if (!props.history) return [];
  return props.history
    .map((item) => {
      const [hours, minutes] = useDateFormat(item.created_at, "H_m")
        .value.split("_")
        .map(Number);
      const normalized_time = (hours * 60 + minutes) / 1440;

      return {
        ...item,
        x: normalized_time,
        y: Number(item.new_price),
      };
    })
    .sort((a, b) => b.x - a.x)
    .filter((item) => item.new_price !== item.old_price);
});

const normalizedHypePriceTimes = computed(() => {
  return normalizedPriceTimes.value.filter((item) => item.type === "hype");
});

const normalizedSongPriceTimes = computed(() => {
  return normalizedPriceTimes.value.filter((item) => item.type === "song");
});

const datasets = computed(() => {
  const type = props.type;
  switch (type) {
    case "both":
      return [
        {
          label: "Hype",
          data: [...normalizedHypePriceTimes.value],
          borderColor: "#FFEE99",
          borderWidth: 1,
          backgroundColor: "#FFEE99",
          tension: 0.5,
        },
        {
          label: "Song",
          data: [...normalizedSongPriceTimes.value],
          borderColor: "#FF99F1",
          borderWidth: 1,
          tension: 0.5,
          backgroundColor: "#FF99F1",
        },
      ];
    case "hype":
      return [
        {
          label: "Hype",
          data: [...normalizedHypePriceTimes.value],
          borderColor: "#FFEE99",
          borderWidth: 1,
          backgroundColor: "#FFEE99",
          tension: 0.5,
        },
      ];
    default:
      return [
        {
          label: "Song",
          data: [...normalizedSongPriceTimes.value],
          borderColor: "#FF99F1",
          borderWidth: 1,
          tension: 0.5,
          backgroundColor: "#FF99F1",
        },
      ];
  }
});

const data = computed<ChartData<"line">>(() => {
  return {
    datasets: [...datasets.value],
  };
});

const chartOptions = computed<ChartOptions<"line">>(() => {
  return {
    scales: {
      x: {
        type: "linear",
        ticks: {
          callback(normalized) {
            const totalMinutes = Math.round((normalized as number) * 1440);
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            return `${String(hours).padStart(2, "0")}:${String(
              minutes
            ).padStart(2, "0")}`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        titleFont: { weight: 400, size: 15 },
        titleMarginBottom: 10,
        bodyColor: "#000",
        boxPadding: 10,
        padding: 10,
        caretSize: 10,
        cornerRadius: 14,
        callbacks: {
          title(tooltipItems) {
            const normalizedValue = tooltipItems[0].parsed.x;
            const totalMinutes = Math.round(normalizedValue * 1440);
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            return `${String(hours).padStart(2, "0")}:${String(
              minutes
            ).padStart(2, "0")}`;
          },
        },
      },
    },
  };
});
</script>
