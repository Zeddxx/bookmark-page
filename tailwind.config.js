/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(231, 69%, 60%)',
        'soft-red' : 'hsl(0, 94%, 66%)',
        'grayish-blue' : 'hsl(229, 8%, 60%)',
        'very-dark-blue':'hsl(229, 31%, 21%)',
      },
    },
  },
  variants: {},
  plugins: [],
};

// :root {
//   /* Primary colors */
//   --color-soft-blue: hsl(231, 69%, 60%);
//   --color-soft-red: hsl(0, 94%, 66%);

//   /* Neutral colors */
//   --color-grayish-blue: hsl(229, 8%, 60%);
//   --color-very-dark-blue: hsl(229, 31%, 21%);
// }