/**
 * @format
 * @type {import('tailwindcss').Config}
 */

// Colors resolve to CSS variables (see index.css) so one set of classes
// serves both the light and dark theme.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: token("page"),
        surface: token("surface"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        onaccent: token("onaccent"),
        accent2: token("accent2"),
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        serif: ['"Instrument Serif"', "serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
