/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: "#f5f5f5",
      "gray-light": "#f9f9f9",
      "gray-dark": "#eeeeee",
      dark: "#333333",
      "gray-blue": "#d7e1e9",
      "gray-blue-light": "#cbdeef",
      red: "#e27571",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      maxWidth: {
        content: "68rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
