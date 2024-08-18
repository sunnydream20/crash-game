/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" }, // Small screens
      md: "768px", // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      "2xl": "1536px", // Double extra large screens
    },
    extend: {},
  },
  plugins: [],
};
