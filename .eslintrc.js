module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/no-anonymous-default-export': [2, { allowNew: true }],
    'require-jsdoc': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 'off',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
