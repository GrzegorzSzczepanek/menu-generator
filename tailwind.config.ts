import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        current: "currentColor",
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#EAECF0",
        "button-primary-border": "#7F56D9",
        "button-primary-bg": "#7F56D9",
        "button-secondary-bg": "#FFFFFF",
        "body-bg": "#F5F5F5",
        "text-primary": "#101828",
        "text-secondary": "#344054",
        "text-tertiary": "#475467",
        "button-secondary-border": "#D0D5DD",
        "button-secondary-color-fg": "#6941C6",
        "border-primary": "#D0D5DD",
        "button-secondary-color-border": "#D6BBFB",
        "border-secondary": "#EAECF0",
        "rounded-custom-rounded": "12px",
        "button-primary-fg": "FFFFFF",
        "button-secondary-fg": "#344054",
        "button-tertiary-fg": "#475467",
      },
      borderRadius: {
        "custom-rounded": "var(--border-radius)",
      },
    },
  },
  plugins: [],
} satisfies Config;
