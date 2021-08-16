module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
