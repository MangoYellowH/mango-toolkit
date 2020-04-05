module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
    'import/extensions': ['error', { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
  }


};
