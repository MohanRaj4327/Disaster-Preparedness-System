/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-bg': '#1a1a2e',
        'game-primary': '#16213e',
        'game-accent': '#e94560',
        'game-secondary': '#0f3460',
      }
    },
  },
  plugins: [],
}
