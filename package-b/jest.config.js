module.exports = {
  transformIgnorePatterns: ["node_modules/(?!package-a)"],
  transform: { "^.+\\.(t|j)sx?$": ["@swc/jest"] },

  testMatch: ["**/*.test.ts?(x)"],
};
