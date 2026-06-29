 import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/** @type {import('tailwindcss').Config} */

// // https://vite.dev/config/
 export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
   plugins: [vue()],
})
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [vue()],
// }
