/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '190px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  plugins: [],
}