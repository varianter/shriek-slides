module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/media-has-caption': 0,
  },
};
