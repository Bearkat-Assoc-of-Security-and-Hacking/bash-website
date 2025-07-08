// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // This section adds our custom fonts to Tailwind's theme.
      fontFamily: {
        sans: ["var(--font-inter)"], // Sets the default sans-serif font
        mono: ["var(--font-ibm-plex-mono)"], // Sets our new header font
      },
    },
  },
  plugins: [],
};
