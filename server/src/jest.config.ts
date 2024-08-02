module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'], // Adjust this pattern to match your test files
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};