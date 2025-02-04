/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url(/assets/banner.jpg)",
      },
      height: {
        102: "84%",
      },
      colors: {
        primary: {
          0: "#0ea5e9",
        },
        secondary: {
          0: "#4b5563",
        },
        light: {
          0: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
