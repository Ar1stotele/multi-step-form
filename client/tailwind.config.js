const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'], // after you font, add some fonts separated by commas to handle fallback.
      },
      colors: {
        primary: {
          marineBlue: '#52BBF6',
          purplushBlue: '#3D3D3D',
          pastelBlue: '#ADBEFF',
          lightBlue: '#BFE2FD',
          strawberryRed: '#ED3548',
        },
        neutral: {
          coolGreen: '#9699AB',
          lightGray: '#D6D9E6',
          magnolia: '#F0F6FF',
          alabaster: '#FAFBFF',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
