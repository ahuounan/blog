const { pathsToModuleNameMapper } = require("./jestUtils/pathsToModuleNameMapper");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "libs/**/*"],
  coveragePathIgnorePatterns: ["src/pages/*", "src/stitches.config.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branch: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  globals: {
    __TEST__: true
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jestUtils/setupTests.ts"],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>/", "<rootDir>/libs"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};
