/** @type {import('tailwindcss').Config} */
module.exports = {
  // This content array is updated to match our file structure.
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Our custom fonts
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },

      // Our custom breakpoints for larger screens
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },

      // Our custom max-width utilities
      maxWidth: {
        "8xl": "90rem", // 1440px
        "9xl": "100rem", // 1600px
        "10xl": "120rem", // 1920px
      },
    },
  },
  plugins: [],
};
