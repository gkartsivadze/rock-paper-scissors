/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rock': 'radial-gradient(white 0 58%, hsl(349, 70%, 56%) 60%)',
        'paper': 'radial-gradient(white 0 58%, hsl(230, 89%, 65%) 60%)',
        'scissors': 'radial-gradient(white 0 58%, hsl(40, 84%, 53%) 60%)',
        'lizard': 'radial-gradient(white 0 58%, hsl(261, 72%, 63%) 60%)',
        'cyan': 'radial-gradient(white 0 58%, hsl(189, 58%, 57%) 60%)',
        'default': 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))'
      },
      fontFamily: {
        'default': 'Barlow Semi Condensed'
      }
    },
  },
  plugins: [],
}

