const { pathsToModuleNameMapper } = require("./jest/pathsToModuleNameMapper");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "libs/**/*"],
  coveragePathIgnorePatterns: ["src/pages/*", "src/stitches.config.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    __TEST__: true,
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest/setupTests.ts"],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>/", "<rootDir>/libs"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};
