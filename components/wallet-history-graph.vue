<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chart"
    class="max-h-[500px] min-w-[450px]"
    v-if="chart"
  />
</template>

<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["January", "February", "March", "Hello"],
  datasets: [
    {
      label: "",
      data: [50, 60, 70, 1160, 45],
      backgroundColor: "blue",
    },
    {
      label: "",
      data: [150, 90, 170, 100, 145],
      backgroundColor: "red",
    },
  ],
});

defineProps<{ chart?: any }>();

const chartOptions = computed<ChartOptions<"bar">>(() => {
  return {
    responsive: true,
    scales: {
      y: {
        stacked: true,
        ticks: {
          callback(data) {
            const value = Number(data);
            // .0[something] regex
            const zeroDecimals = /\.0+$|(\.[0-9]*[1-9])0+$/;
            if (!value) return "0";
            //format number to K (thousand) or M (million)
            if (value >= 1e6)
              return `${(value / 1e6).toFixed(2).replace(zeroDecimals, "$1")}M`;
            if (value >= 1e3)
              return `${(value / 1e3).toFixed(2).replace(zeroDecimals, "$1")}K`;
            return value.toFixed(2).replace(zeroDecimals, "$1");
          },
        },
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        titleFont: { weight: 400, size: 15 },
        titleMarginBottom: 10,
        bodyColor: "#000",
        boxPadding: 8,
        padding: 8,
        caretSize: 8,
        cornerRadius: 8,
        yAlign: "bottom",
      },
    },
  };
});
</script>
