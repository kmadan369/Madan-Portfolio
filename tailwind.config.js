/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#141414',
        'surface-light': '#1a1a1a',
        border: '#2a2a2a',
        'text-primary': '#FFFFFF',
        'text-secondary': '#888888',
        'accent-gold': '#F5C000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
}
