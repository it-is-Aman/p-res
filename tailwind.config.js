/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cinzel": ['cinzel', 'sans-serif'],
        "source-sans-pro": ['source-sans-pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

