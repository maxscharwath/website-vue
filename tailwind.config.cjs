/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#031d44",
        "background-light": "#04395e",
        "primary": "#D5896F",
        "secondary": "#70a288",
        "tertiary": "#dab785",
      },
      fontSize: {
        "heading-1": "clamp(40px, 8vw, 80px)",
        "heading-2": "clamp(32px, 6vw, 64px)",
        "heading-3": "clamp(24px, 4vw, 32px)",
        "heading-4": "clamp(20px, 3vw, 24px)",
      },
    },
  },
  plugins: [],
}
