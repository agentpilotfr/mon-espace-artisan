import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cosmos: {
          950: '#0a0a1a',
          900: '#1a0a2e',
          800: '#2a1a3e',
        },
        sage:  { DEFAULT: '#7C9A7E', dark: '#2d5a3d' },
        gold:  { DEFAULT: '#C4A35A', light: '#D4B36A' },
        beige: { DEFAULT: '#f8f5f0', warm: '#f0ebe3' },
        star:  { DEFAULT: '#F8F6FF' },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        sans:  ['Source Sans 3',     ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
