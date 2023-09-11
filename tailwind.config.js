/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'scissor-gradient': 'radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper-gradient': 'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock-gradient': 'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'lizzard-gradient': 'radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'cyan-gradient': 'radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
        'default': 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))'
      },
      fontFamily: {
        'default': 'Barlow Semi Condensed'
      }
    },
  },
  plugins: [],
}

