// Jest config
module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: [],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/jest/'
  ],
  testTimeout: 15000
};
