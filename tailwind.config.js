/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gremlin': {
          tan: '#f5edd9',
          'tan-light': '#faf6ec',
          'tan-dark': '#e6d9bb',
          lime: '#84cc16',
          'lime-light': '#a3e635',
          'lime-dark': '#65a30d',
          'dark': '#4d5339',
        },
      },
      fontFamily: {
        'gremlin': ['"Baloo 2"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
