module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: ['./test/jest.setup.ts'],
};
