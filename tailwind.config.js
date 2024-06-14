/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "grey-25": "#FAFAFA",
      },
    },
  },
  plugins: [require("daisyui")],
};
