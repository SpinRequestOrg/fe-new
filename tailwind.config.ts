import type { Config } from "tailwindcss";

const config = {
  darkMode: ["selector"],
  content: [],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "var(--cp)",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        mac: "950px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "sp-purple": {
          DEFAULT: "#844AFF",
          200: "#A799FF",
        },
      },
      fontFamily: {
        grotesk: ["ClashGrotesk-Variable", "sans-serif"],
        display: ["ClashDisplay-Variable", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        "host-item": "50px 1fr 15px",
        "host-item__live": "50px 1fr auto 10px",
        "request-line-item": "auto 1fr 150px 120px 220px",
      },
      keyframes: {
        "overlay-show": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "content-show": {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
        collapsibleSlideDown: {
          from: { height: "0" },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        collapsibleSlideUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-in",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
        overlayShow: "overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        collapsibleSlideDown:
          "collapsibleSlideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        collapsibleSlideUp:
          "collapsibleSlideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
} satisfies Config;

export default config;
