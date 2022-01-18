module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: 16,
          sm: 24,
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
