/** Configuration settings file, contains the related settings to test the files and css modules */
module.exports = {
  verbose: true,
  /** Run tests only on these file extensions */
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  /** Collect the coverage only from the defined files and folders, ignoring folders like node_modules and dist */
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/index.js',
    '!**/coverage/**',
    '!**/dist/**',
  ],
  /** Defining the coverage percentage in here, set it to 85%. */
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  /** This flag will look for the file defined here and run that file before each test.
   * So, functions like cleanup will no longer need to repeat in every test file. */
  setupFilesAfterEnv: ['./src/setUpTests.js'],
};
