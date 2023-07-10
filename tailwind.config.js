/** @type {import('tailwindcss').Config} */
export default {
  content: ['*'],
  theme: {
    fontFamily: {
      mono: ['"Spline Sans Mono"'],
      sans: ['"JetBrains Mono"'],
    },
    extend: {
      colors: {
        'term-bg': '#0D1117',
        'term-fg': 'white',
        accent: '#ED4331',
      },
    },
  },
  plugins: [],
};
