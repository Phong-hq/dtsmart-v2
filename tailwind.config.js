/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "12px": "12px",
      "14px": "14px",
      "16px": "16px",
      "18px": "18px",
      "22px": "22px",
      "28px": "28px",
      "32px": "32px",
      "36px": "36px",
    },
    lineHeight: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "26px": "26px",
      "28px": "28px",
      "32px": "32px",
      "35px": "35px",
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // colors: {
      //   "primary": "var(--primary)",
      //   "danger": "var(--danger)",
      //   "warning": "var(--warning)",
      //   "success": "var(--success)",
      //   "white": "var(--white)",
      //   "purple": "var(--purple)",
      //   "booking": "var(--booking)",
      //   // "awaiting": "#00B7C4",
      //   "pink": "var(--pink)",
      //   "in-service": "var(--in-service)",
      //   "regular": "var(--regular)",
      //   "import": "var(--import)",
      //   "pending": "var(--pending)",
      //   "vip": "var(--vip)",
      //   "yellow": "var(--yellow)",
      //   "cancelled": "var(--color-37)",
      //   "primary-lighter": "#B4BCFF",
      //   "completed": "#5FD895",
      //   current: "currentColor",
      //   "th": "#8A8A8A",
      //   "grey": "#8A8A8A",
      //   "hover": "#EFF2FD",
      // },
    },
  },
  plugins: [],
};
