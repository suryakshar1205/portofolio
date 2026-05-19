/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        void: "#030712",
        ink: "#07111f",
        cyan: {
          beam: "#22d3ee",
          deep: "#0891b2"
        },
        violet: {
          pulse: "#8b5cf6",
          haze: "#4c1d95"
        },
        plasma: "#60a5fa"
      },
      boxShadow: {
        glow: "0 0 36px rgba(34, 211, 238, 0.28)",
        violet: "0 0 44px rgba(139, 92, 246, 0.24)"
      },
      backgroundImage: {
        "radial-field":
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,.16), transparent 32%), radial-gradient(circle at 80% 10%, rgba(139,92,246,.16), transparent 30%), radial-gradient(circle at 50% 90%, rgba(96,165,250,.10), transparent 35%)",
        "grid-lines":
          "linear-gradient(rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
