/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#DFEB8A",
        "primary-dark": "#A8A8A8",
        cyan: "#95EAFF",
        magenda: "#C3B0FF",
        "primary-orange": "#FFBD92",
        "input-bg": "#2E3234",
      },
    },
  },
  plugins: [
    //eslint-disable-next-line
    require("tailwind-scrollbar-hide"),
  ],
};
