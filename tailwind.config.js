module.exports = {
  purge: [process.env.NODE_ENV === "production" && "./src/**/*.svelte"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
