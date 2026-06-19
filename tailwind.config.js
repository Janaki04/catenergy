/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Option B: Keeps standard sans but lets you use 'font-oswald' whenever needed
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}