/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import forms from '@tailwindcss/forms'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    forms
  ],
  daisyui: {
    themes: [
      'light', // or 'dark', 'cupcake', 'bumblebee', etc.
    ],
  },
}

