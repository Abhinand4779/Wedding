/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        ivory: {
          DEFAULT: '#fffff0',
          50: '#ffffff',
          100: '#fffff5',
          200: '#ffffea',
          300: '#ffffdf',
          400: '#ffffd4',
          500: '#fffff0',
          600: '#e6e6d8',
          700: '#bfbfb4',
          800: '#999990',
          900: '#73736c',
        },
        sage: {
          DEFAULT: '#9caf88',
          50: '#f5f7f3',
          100: '#eaefe6',
          200: '#cbd7c1',
          300: '#acbf9c',
          400: '#8ba475',
          500: '#748c5e',
          600: '#5e714b',
          700: '#48573a',
          800: '#323c28',
          900: '#1b2216',
        },
        gold: {
          DEFAULT: '#d4af37',
          50: '#fbf7eb',
          100: '#f6efd6',
          200: '#ebd7a1',
          300: '#e0bf6c',
          400: '#d7a93a',
          500: '#b89025',
          600: '#90711d',
          700: '#695315',
          800: '#43340d',
          900: '#1d1704',
        }
      }
    },
  },
  plugins: [],
}
