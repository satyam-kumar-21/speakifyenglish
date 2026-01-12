export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  colors: {
                        primary: "#1a365d", // Royal Blue
                        secondary: "#ed8936", // Orange/Gold
                        accent: "#f6ad55",
                  },
                  fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                  },
                  animation: {
                        'fade-in-up': 'fadeInUp 0.5s ease-out',
                  },
                  keyframes: {
                        fadeInUp: {
                              '0%': { opacity: '0', transform: 'translateY(20px)' },
                              '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                  },
            },
      },
      plugins: [],
}
