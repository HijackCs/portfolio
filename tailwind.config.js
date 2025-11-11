/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(-10deg)' },
        },
      },
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.title-hero': {
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: '900',
          fontSize: '3rem',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          '@media (min-width: 768px)': {
            fontSize: '4.5rem',
          },
        },
        '.title-section': {
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: '700',
          fontSize: '2.25rem',
          lineHeight: '1.1',
          '@media (min-width: 768px)': {
            fontSize: '3rem',
          },
        },
        '.title-subsection': {
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: '700',
          fontSize: '1.5rem',
          lineHeight: '1.1',
          '@media (min-width: 768px)': {
            fontSize: '1.875rem',
          },
        },
        '.title-card': {
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: '700',
          fontSize: '1.25rem',
          lineHeight: '1.1',
        },
        '.text-description': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '300',
          fontSize: '1.25rem',
          lineHeight: '1.625',
          '@media (min-width: 768px)': {
            fontSize: '1.5rem',
          },
        },
        '.text-paragraph': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '400',
          fontSize: '1.125rem',
          lineHeight: '1.625',
        },
        '.text-card': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
          lineHeight: '1.625',
        },
        '.text-small': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '400',
          fontSize: '0.875rem',
          lineHeight: '1.25',
        },
        '.text-badge': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '500',
          fontSize: '0.875rem',
          lineHeight: '1.25',
        },
        '.text-button': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '700',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}
