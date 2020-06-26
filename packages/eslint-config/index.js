module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['*.test.*', '*.spec.*'] },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', 'tsx', 'ts'] },
    ],
    'import/extensions': [
      'error',
      { extensions: ['.js', '.jsx', 'tsx', 'ts'] },
    ],
  },
};
