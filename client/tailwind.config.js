/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    fontFamily: {
      primary: "Poppins",
      title: "Courgette",
      content: "Crimson Text",
    },
    extend: {
      colors: {
        primary: "#F1F6F9",
        Secondary: "#9BA4B5",
        tertiary: "#F1F6F9",
        light: "#F1F6F9",
        dark: "#212A3E",
      },
    },
  },
  plugins: [],
};
