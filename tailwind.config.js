/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"'],
        redhat: ["Red Hat Text"],
      },
    },
  },
  plugins: [],
};
