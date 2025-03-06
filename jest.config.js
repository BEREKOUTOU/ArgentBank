module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"]
};