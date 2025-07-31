// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [  "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {
//       animation: {
//         'gradient-x': 'gradient-x 8s ease infinite',
//         'fadeIn': 'fadeIn 0.8s ease-in-out forwards'
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//         'fadeIn': {
//           '0%': { opacity: 0, transform: 'translateY(10px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         }
//       }
//     },
//   },
//  plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // make sure it includes your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
