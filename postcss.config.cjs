const path = require("path");
// Aponta o tailwind para o config absoluto (robusto a qualquer cwd do dev server).
module.exports = {
  plugins: {
    tailwindcss: { config: path.join(__dirname, "tailwind.config.js") },
    autoprefixer: {},
  },
};
