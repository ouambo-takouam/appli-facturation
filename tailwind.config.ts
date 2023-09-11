import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray01: "rgb(141, 144, 150)",
        black01: "rgb(57, 58, 61)",
        black02: "rgb(40, 40, 40)",
      },
      boxShadow: {
        btn: "0 0 0 2px rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
export default config;
