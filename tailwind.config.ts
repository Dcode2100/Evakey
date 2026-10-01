import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--c-primary) / <alpha-value>)",
          light: "rgb(var(--c-primary-light) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--c-secondary) / <alpha-value>)",
          dark: "rgb(var(--c-primary) / <alpha-value>)",
        },
        brass: "rgb(var(--c-brass) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--c-surface) / <alpha-value>)",
          2: "rgb(var(--c-surface-2) / <alpha-value>)",
        },
        accent: {
          1: "rgb(var(--c-a1) / <alpha-value>)",
          2: "rgb(var(--c-a2) / <alpha-value>)",
          3: "rgb(var(--c-a3) / <alpha-value>)",
          4: "rgb(var(--c-a4) / <alpha-value>)",
          5: "rgb(var(--c-a5) / <alpha-value>)",
        },
        background: "rgb(var(--c-bg) / <alpha-value>)",
        foreground: "rgb(var(--c-ink) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--c-surface) / <alpha-value>)",
          foreground: "rgb(var(--c-ink) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--c-surface) / <alpha-value>)",
          foreground: "rgb(var(--c-ink) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--c-secondary) / <alpha-value>)",
          foreground: "rgb(var(--c-ink) / <alpha-value>)",
        },
        border: "rgb(var(--c-line) / <alpha-value>)",
        input: "rgb(var(--c-line) / <alpha-value>)",
        ring: "rgb(var(--c-primary) / <alpha-value>)",
        destructive: "#c0392b",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'opensans': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'roboto': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontSize: {
        '55': '55rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
