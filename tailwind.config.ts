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
        white: "#ffffff",
        border: "#D0D5DD",
        "body-bg": "#F5F5F5",
        "menu-el-bg": "#D0D5DD",
        "font-dark": "#101827",
        "font-bright": "#475466",
        addBtn: "#7D5AD3",
      },
    },
  },
  plugins: [],
} satisfies Config;
