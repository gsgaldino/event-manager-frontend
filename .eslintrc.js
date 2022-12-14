module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'react/no-children-prop': 'off',
  },
};
