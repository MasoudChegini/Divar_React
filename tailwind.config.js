/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        divarFont: ["InriaSans-Bold"],
        vazirFont: ["vazir"],
        vazirFontb: ["vazir-b"],
      },
    },
  },
  plugins: [],
};
