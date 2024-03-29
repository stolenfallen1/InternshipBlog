/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        sacramento: ["Sacramento"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1248px",
        "2xl": "1536px",
        "custom-600": { min: "500px", max: "639px" },
        "custom-500": { max: "499px" },
      },
    },
  },
  plugins: [],
};
