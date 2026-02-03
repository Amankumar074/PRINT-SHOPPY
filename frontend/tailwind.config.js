/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color-1": "#0F172A", // dark blue / primary
        "theme-color-2": "#2563EB", // blue
        "theme-color-3": "#22C55E", // green
        "theme-color-4": "#F59E0B", // orange / accent
      },
    },
  },
  plugins: [],
}
