/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  backgroundImage: {
    heroLight:
      "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
    heroDark:
      "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
  },
  plugins: [],
}

