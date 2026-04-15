/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          overlay: 'var(--bg-overlay)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
        },
        semantic: {
          positive: 'var(--semantic-positive)',
          negative: 'var(--semantic-negative)',
          warning: 'var(--semantic-warning)',
          neutral: 'var(--semantic-neutral)',
        },
        border: {
          default: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Source Serif 4"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        display: 'clamp(56px, 8vw, 120px)',
        h1: 'clamp(36px, 5vw, 64px)',
        h2: 'clamp(24px, 3vw, 40px)',
        h3: 'clamp(18px, 2.5vw, 28px)',
        body: 'clamp(14px, 1.5vw, 16px)',
        small: 'clamp(12px, 1.2vw, 13px)',
        label: 'clamp(10px, 1vw, 11px)',
        mono: 'clamp(13px, 1.3vw, 14px)',
      },
      boxShadow: {
        skinSm: 'var(--shadow-sm)',
        skinMd: 'var(--shadow-md)',
        skinLg: 'var(--shadow-lg)',
        skinGlow: 'var(--shadow-glow)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
