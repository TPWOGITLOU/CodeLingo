import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-purple": "#58355E",
        "light-purple": "#7E7F9A",
        "button-coral": "#EB9486",
        "link-orange": "#FFB400",
        "nice-yellow": "#F6FDC3",
        "back-green": "#CAE7B9",
        "border-colour": "#85586F",
        "card-colour": "#F5EEE6",
        "header-colour": "#8fc9a1",
      },
      gridTemplateColumns: {
        "matching-grid": "  grid-template-columns: 1fr 20px 1fr;",
      },
      fontFamily: {
        honk: ["Honk", "system-ui"],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#CDFADB",
            foreground: "#58355E",
          },
        },
        dark: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
  darkMode: "class",
};

export default config;
