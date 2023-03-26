/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./img/HeroBackground.jpg')",
        "side-bar-background": "url('./img/SideBarBackground.jpg')",
      },
    },
  },
  plugins: [],
};
