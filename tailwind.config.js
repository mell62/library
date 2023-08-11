/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        milonga: ['"Milonga"'],
        redhat: ["Red Hat Text"],
      },
    },
  },
  plugins: [],
};
