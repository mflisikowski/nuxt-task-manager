import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  plugins: [animate],
} satisfies Config;
