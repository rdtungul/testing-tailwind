/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C3051',
        secondary: '#CDC4B1',
        paragraph: '#2A2B2A',
        cta: '#5A2A24',
        testimonial: '#e5e5e5',
      },
    },
  },
  plugins: [],
}
