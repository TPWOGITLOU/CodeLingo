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
        "nice-yellow": "#F6FDC3",
        "border-colour": "#85586F",
        coral: "#d55866",
        header: "#18181a",
        "code-editor-dark": "#1e1e1e",
      },
      gridTemplateColumns: {
        "matching-grid": "  grid-template-columns: 1fr 20px 1fr;",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            foreground: "#58355E",
          },
        },
      },
    }),
  ],
  darkMode: "class",
};

export default config;
