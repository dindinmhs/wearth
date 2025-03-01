import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode : "class",
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
        "dark" : "#23272f",
        "forest" : "#2C6E49"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
