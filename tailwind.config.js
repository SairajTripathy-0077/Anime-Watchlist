/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clickUper : ["Clickuper", "sans-serif"],
        alphabutts: ["Alphabutts", "sans-serif"],
        minecraft: ["MinecraftAlt", "sans-serif"],
      },
      colors: {
        primary: '#2A0E3F',
      }
    },
  },
  plugins: [],
}