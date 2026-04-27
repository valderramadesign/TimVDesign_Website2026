/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#F9F9F9",
          100: "#F3F3F3",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#6B6B6B",
          600: "#525252",
          700: "#3D3D3D",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(60px,9vw,120px)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(40px,6vw,80px)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(28px,4vw,56px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
