/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': "url('assets/bg-desktop.svg')",
        'mobile-bg': "url('assets/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
}
