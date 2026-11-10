import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "hsl(40, 70%, 60%)",
          light: "hsl(45, 90%, 70%)",
          dark: "hsl(35, 70%, 45%)",
          muted: "hsl(40, 40%, 35%)",
        },
        obsidian: {
          DEFAULT: "hsl(20, 10%, 5%)",
          light: "hsl(20, 8%, 8%)",
          card: "hsl(20, 8%, 10%)",
        },
        cream: {
          DEFAULT: "hsl(40, 30%, 92%)",
          muted: "hsl(40, 15%, 65%)",
        },
        border: "hsl(40, 20%, 18%)",
        input: "hsl(40, 20%, 18%)",
        ring: "hsl(40, 70%, 60%)",
        background: "hsl(20, 10%, 5%)",
        foreground: "hsl(40, 30%, 92%)",
        primary: {
          DEFAULT: "hsl(40, 70%, 60%)",
          foreground: "hsl(20, 10%, 5%)",
        },
        secondary: {
          DEFAULT: "hsl(20, 8%, 12%)",
          foreground: "hsl(40, 30%, 92%)",
        },
        muted: {
          DEFAULT: "hsl(20, 8%, 12%)",
          foreground: "hsl(40, 15%, 55%)",
        },
        accent: {
          DEFAULT: "hsl(40, 50%, 45%)",
          foreground: "hsl(40, 30%, 92%)",
        },
        card: {
          DEFAULT: "hsl(20, 8%, 8%)",
          foreground: "hsl(40, 30%, 92%)",
        },
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
      },
      letterSpacing: {
        widest: "0.3em",
        "ultra-wide": "0.5em",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
