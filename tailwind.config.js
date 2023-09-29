/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: '	#3b4363',
        scoreText: '#2a46c0',
        headerOutline: '#606e85',
        paperShadow: 'hsl(230, 65%, 35%)',
        scissorShadow: 'hsl(39, 89%, 35%)',
        rockShadow: 'hsl(349, 71%, 35%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient( circle at 50% 0%, hsl(214, 47%, 23%) 50%, hsl(237, 49%, 15%) 100% )',
        'scissor-gradient': 'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'scissor-shadow': 'hsl(39, 89%, 35%)',
        'rock-gradient': 'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'rock-shadow': 'hsl(349, 71%, 35%)',
        'paper-gradient': 'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',

      }
    },
  },
  plugins: [],
}

