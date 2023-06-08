/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      }
    },
  },
  plugins: [],
}

