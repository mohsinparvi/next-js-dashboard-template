import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dashboard: {
          primary: "#146EB4",
          "black-2": "#010101",
          body: "#64748B",
          bodydark: "#AEB7C0",
          bodydark1: "#DEE4EE",
          bodydark2: "#8A99AF",
          secondary: "#80CAEE",
          stroke: "#E2E8F0",
          gray: "#EFF4FB",
          graydark: "#333A48",
          "gray-2": "#F7F9FC",
          "gray-3": "#FAFAFA",
          whiten: "#F1F5F9",
          whiter: "#F5F7FD",
          boxdark: "#24303F",
          "boxdark-2": "#1A222C",
          strokedark: "#2E3A47",
          "form-strokedark": "#3d4d60",
          "form-input": "#1d2a39",
          "meta-1": "#DC3545",
          "meta-2": "#EFF2F7",
          "meta-3": "#10B981",
          "meta-4": "#313D4A",
          "meta-5": "#259AE6",
          "meta-6": "#FFBA00",
          "meta-7": "#FF6766",
          "meta-8": "#F0950C",
          "meta-9": "#E5E7EB",
          "meta-10": "#0FADCF",
          success: "#219653",
          danger: "#D34053",
          warning: "#FFA70B",
        },
      },
    },
  },
  plugins: [],
});
export default config;
