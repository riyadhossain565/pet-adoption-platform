/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-img": "url('/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
