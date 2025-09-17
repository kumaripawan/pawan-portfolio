/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // ✅ catches app/ and app/components
    "./pages/**/*.{js,ts,jsx,tsx}",   // ✅ in case you use /pages folder later
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ standalone components (if any)
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0 6px 20px -8px rgba(0,0,0,0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
        float: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-16px) translateX(8px)" },
        },
        spinSlower: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out both",
        pop: "pop .15s ease-out both",
        float: "float 12s ease-in-out infinite alternate",
        spinSlower: "spinSlower 60s linear infinite",
      },
    },
  },
  plugins: [],
};
