import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          light: "hsl(var(--gray-light))",
          medium: "hsl(var(--gray-medium))",
          dark: "hsl(var(--gray-dark))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        "serif-elegant": ["Playfair Display", "Georgia", "serif"],
        "sans-clean": ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-premium": "var(--gradient-premium)",
      },
      boxShadow: {
        "soft": "var(--shadow-soft)",
        "medium": "var(--shadow-medium)",
        "large": "var(--shadow-large)",
        "glow": "var(--shadow-glow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
        keyframes: {
          // Accordion
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          
          // Fade animations
          "fade-in": {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
          },
          "fade-in-up": {
            "0%": { opacity: "0", transform: "translateY(40px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
          },
          "fade-in-down": {
            "0%": { opacity: "0", transform: "translateY(-40px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
          },
          "fade-in-left": {
            "0%": { opacity: "0", transform: "translateX(-40px)" },
            "100%": { opacity: "1", transform: "translateX(0)" }
          },
          "fade-in-right": {
            "0%": { opacity: "0", transform: "translateX(40px)" },
            "100%": { opacity: "1", transform: "translateX(0)" }
          },
          
          // Scale animations
          "scale-in": {
            "0%": { opacity: "0", transform: "scale(0.9)" },
            "100%": { opacity: "1", transform: "scale(1)" }
          },
          "scale-up": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.05)" }
          },
          
          // Slide animations
          "slide-up": {
            "0%": { transform: "translateY(100%)" },
            "100%": { transform: "translateY(0)" }
          },
          "slide-down": {
            "0%": { transform: "translateY(-100%)" },
            "100%": { transform: "translateY(0)" }
          },
          
          // Typewriter effect
          "typewriter": {
            "0%": { width: "0" },
            "100%": { width: "100%" }
          },
          "blink": {
            "0%, 50%": { borderColor: "transparent" },
            "51%, 100%": { borderColor: "hsl(var(--primary))" }
          },
          
          // Floating animation
          "float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" }
          },
          
          // Pulse glow
          "pulse-glow": {
            "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
            "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" }
          },
          
          // Shimmer loading
          "shimmer": {
            "0%": { backgroundPosition: "-200% 0" },
            "100%": { backgroundPosition: "200% 0" }
          },
          
          // Bounce in
          "bounce-in": {
            "0%": { opacity: "0", transform: "scale(0.3)" },
            "50%": { opacity: "1", transform: "scale(1.05)" },
            "70%": { transform: "scale(0.9)" },
            "100%": { opacity: "1", transform: "scale(1)" }
          },
          
          // Rotation
          "rotate-slow": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" }
          },
          
          // Gradient shift
          "gradient-shift": {
            "0%, 100%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" }
          }
        },
        animation: {
          // Basic animations
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          
          // Fade animations
          "fade-in": "fade-in 0.6s ease-out",
          "fade-in-up": "fade-in-up 0.6s ease-out",
          "fade-in-down": "fade-in-down 0.6s ease-out",
          "fade-in-left": "fade-in-left 0.6s ease-out",
          "fade-in-right": "fade-in-right 0.6s ease-out",
          
          // Scale animations
          "scale-in": "scale-in 0.4s ease-out",
          "scale-up": "scale-up 0.3s ease-out",
          
          // Slide animations
          "slide-up": "slide-up 0.5s ease-out",
          "slide-down": "slide-down 0.5s ease-out",
          
          // Special effects
          "typewriter": "typewriter 3s steps(30) infinite",
          "blink": "blink 1s infinite",
          "float": "float 3s ease-in-out infinite",
          "pulse-glow": "pulse-glow 2s ease-in-out infinite",
          "shimmer": "shimmer 2s linear infinite",
          "bounce-in": "bounce-in 0.6s ease-out",
          "rotate-slow": "rotate-slow 20s linear infinite",
          "gradient-shift": "gradient-shift 3s ease infinite",
          
          // Delayed animations
          "fade-in-delay-1": "fade-in-up 0.6s ease-out 0.1s both",
          "fade-in-delay-2": "fade-in-up 0.6s ease-out 0.2s both",
          "fade-in-delay-3": "fade-in-up 0.6s ease-out 0.3s both",
          "fade-in-delay-4": "fade-in-up 0.6s ease-out 0.4s both",
          "fade-in-delay-5": "fade-in-up 0.6s ease-out 0.5s both",
        },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
