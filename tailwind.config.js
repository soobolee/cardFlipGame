/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flipHorizontal: {
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipHorizontalReverse: {
          '100%': { transform: 'rotateY(-180deg)' },
        }
      },
      animation: {
        hflipForward: "flipHorizontal 1s forwards",
        hflipReverse: "flipHorizontalReverse 1s forwards",
      },
    },
  },
  plugins: [Myclass],
}

