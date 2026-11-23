import type { Config } from "tailwindcss";

/** Keeps tokens as plain hex in CSS while still supporting `/opacity` modifiers. */
const token = (name: string) => `color-mix(in srgb, var(--color-${name}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        forest: token("forest"),
        "forest-700": token("forest-700"),
        sage: token("sage"),
        "sage-light": token("sage-light"),
        cream: token("cream"),
        "cream-text": token("cream-text"),
        paper: token("paper"),
        mustard: token("mustard"),
        rust: token("rust"),
        ink: token("ink"),
        "ink-muted": token("ink-muted"),
        art: {
          coffee: token("art-coffee"),
          "coffee-dark": token("art-coffee-dark"),
          crema: token("art-crema"),
          milk: token("art-milk"),
          cup: token("art-cup"),
          "lid-dark": token("art-lid-dark"),
          kraft: token("art-kraft"),
          crust: token("art-crust"),
          custard: token("art-custard"),
          burnt: token("art-burnt"),
          bean: token("art-bean"),
          "bean-dark": token("art-bean-dark"),
          pistachio: token("art-pistachio"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        condensed: ["var(--font-condensed)", "Impact", "sans-serif"],
        logo: ["var(--font-logo)", "var(--font-display)", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        offset: "var(--shadow-offset)",
        "offset-lg": "var(--shadow-offset-lg)",
        soft: "var(--shadow-soft)",
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-12px) rotate(calc(var(--r, 0deg) + 6deg))" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
