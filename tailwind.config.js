module.exports = {
  content: [
      "./public/**/*.html",
      "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
      themes: false
  }
}
