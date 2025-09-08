/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out both",
        pop: "pop .15s ease-out both",
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: { card: "0 6px 20px -8px rgba(0,0,0,0.12)" },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(12px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        pop: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.02)" } },

        /* NEW: gentle float for blobs */
        float: {
          "0%":   { transform: "translateY(0px) translateX(0px)" },
          "100%": { transform: "translateY(-20px) translateX(10px)" }
        },
        /* optional: slow rotate for grid sheen */
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out both",
        pop: "pop .15s ease-out both",

        /* NEW */
        float: "float 10s ease-in-out infinite alternate",
        spinSlow: "spinSlow 60s linear infinite"
      }
    }
  },
  plugins: []
};
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(12px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        pop: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.02)" } },

        // NEW
        spinSlower: { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        float: { "0%": { transform: "translateY(0) translateX(0)" }, "100%": { transform: "translateY(-16px) translateX(8px)" } },
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out both",
        pop: "pop .15s ease-out both",

        // NEW
        spinSlower: "spinSlower 60s linear infinite",
        float: "float 12s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};