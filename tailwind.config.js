/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C3051',
        secondary: '#CDC4B1',
        paragraph: '#2A2B2A',
      },
    },
  },
  plugins: [],
}
