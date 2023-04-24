/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        "desktop": "376px"
      },
      colors: {
        "custom-Very-dark-blue-(main-background)": "hsl(233, 47%, 7%)",
        "custom-Dark-desaturated-blue-(card-background)": "hsl(244, 38%, 16%)",
        "custom-Soft-violet-(accent)": "hsl(277, 64%, 61%)",
        "custom-Slightly-transparent-white-(main paragraph)": "hsla(0, 0%, 100%, 0.75)",
        "custom-Slightly-transparent-white-(stat headings)": "hsla(0, 0%, 100%, 0.6)"
      },
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "Lexend-Deca":["Lexend Deca","sans-serif"],
      },
    },
  },
  plugins: [],
}

