/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(12,100,204)",
        "primary-gradient":
          "linear-gradient(90deg, rgba(12,100,204,0.9220938375350141) 32%, rgba(5,18,70,0.9220938375350141) 63%)",
      },
    },
  },
  plugins: [],
};
