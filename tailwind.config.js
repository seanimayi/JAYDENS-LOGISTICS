/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: [
        {'var(--font-poppins)': 'sans-serif'}
      ]
    },
  },
  plugins: [],
};
