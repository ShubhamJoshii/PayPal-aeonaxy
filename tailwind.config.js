/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-Color': '#021b62',
        'secondary-Color': '#006fe0',
        'third-Color': '#031b61',
        "button-Color":"#003188"
      },
      backgroundImage: {
        'first-Slide':'url("/src/Assets/BackgroungImg2.png")',
        'third-Slide':'url("/src/Assets/LadyUsingPhone.jpg")',
        'JoinNowPage': "url('/src/Assets/ContactMeDesign.png')",
      },
      backgroundSize:{
        '500px':'500px',
        '100vw':'100vw',
      }
    },
  },
  plugins: [],
}