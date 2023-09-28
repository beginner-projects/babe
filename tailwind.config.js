/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        textH: "#FFFFFF",
        textP: "#5B626E",
        accent: "#FF7E33",
        btn: "#9333EA",
        Tdiv: "#293041",
        PieI: "#0EA5E9",
        chatT: "#A5B4FC",
        chatI: "#818CF8",
        chatBg: "#151B3C",
        locT: "#5EEAD4",
        locI: "#2DD4BF",
        locBg: "#0F2131",
      },
    },
  },
  plugins: [],
};
