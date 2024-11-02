module.exports = {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "**/*.{js,ts}?(x)": [
    "eslint",
    /**
     * TODO: Enable running unit testing
     */
    // 'vitest related --run'
  ],
};
