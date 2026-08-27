/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Existing JSX mein bg-cyan/text-cyan classes use ho rahi hain,
        // is liye compatibility ke liye cyan ko cream color map kiya gaya hai.
        cyan: "#EFECCA",
        cream: "#EFECCA",
        ink: "#000000",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["Archivo Black", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 26s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
