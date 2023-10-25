module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint", "prettier --write"],
  "*.{json,yaml}": ["prettier --write"],
  "**/*.ts?(x)": () => "npm run check-types",
};
