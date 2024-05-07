/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          primary1: "#323232",
        },
        secondary: {
          secondary1: "#F0F0F0",
          secondary2: "#BDBDBD",
        },
        accent:{
          secondary1: "#1BCF92",
          secondary2: "#E55249",
          secondary3: "#FFC839",
        }
      },
    },
  },
  borderRadius: {
    app: "30px",
    page: "30px",
    box: "24px",
    image: "16px",
  },
  plugins: [],
}

