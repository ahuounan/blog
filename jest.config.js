module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    __TEST__: true
  },
  snapshotSerializers: ['jest-stitches'],
  setupFilesAfterEnv: ['./jest/setup-tests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@controllers/(.*)': '<rootDir>/src/controllers/$1',
    '@libs/(.*)': '<rootDir>/src/libs/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@stitches.config': '<rootDir>/src/stitches.config'
  }
};
