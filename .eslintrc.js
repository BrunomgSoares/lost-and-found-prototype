/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'lines-between-class-members': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-undef': 0,
    'class-methods-use-this': 0,
    'no-useless-constructor': 0,
    'no-empty-function': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    camelcase: ['error', { allow: ['updated_at', 'created_at', 'expires_at'] }],
    "@typescript-eslint/no-useless-constructor": ["error"],
          "@typescript-eslint/lines-between-class-members": ["error", {"exceptAfterSingleLine": true}],
          "@typescript-eslint/no-unused-vars": ["error"],
          "@typescript-eslint/no-empty-function": ["error"],
          '@typescript-eslint/no-shadow': 1,
          'no-shadow': 0,
          'no-console': ['error'],
          'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
          'global-require': 0,
          'lines-around-directive': ['error', { before: 'never', after: 'always' }],
          'newline-per-chained-call': 0, // Line break before .then/.catch/...
          'no-use-before-define': 0,
          "@typescript-eslint/no-use-before-define": ["error"],
          'max-len': 0,
          'padded-blocks': 0,
          'no-param-reassign': 0,
          radix: ['error', 'as-needed'],
          //'no-underscore-dangle': ['error', { allow: ['_id', '_aggregatedId', '__get__'] }],
          'object-curly-newline': ['error', { consistent: true }],
          'spaced-comment': ['error', 'always', { markers: ['/', '//', '////', '-'] }],
          'no-continue': 0,
          'no-lonely-if': 0,
          'brace-style': 0,
          "comma-dangle": 0,
          "func-call-spacing": "off",
          "@typescript-eslint/func-call-spacing": ["error", 'never'],
          "comma-spacing": "off",
          "@typescript-eslint/comma-spacing": ['error', { before: false, after: true }],
          "@typescript-eslint/comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline",
            "enums": "always-multiline",
            "generics": "always-multiline",
            "tuples": "always-multiline",
        }],
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": ["error",{
          before: true,
          after: true,
          overrides: {
            return: { after: true },
            throw: { after: true },
            case: { after: true }
          }
        }],
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error",'always'],
        "quotes": "off",
        "semi": "off",
        "@typescript-eslint/semi": ['error'],
        "@typescript-eslint/space-before-function-paren": ['error', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error", { "int32Hint": false }],
        "@typescript-eslint/quotes": ['error', 'single', { avoidEscape: true }],
        "@typescript-eslint/brace-style": ['error', 'stroustrup', { allowSingleLine: true }],
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 1 }],
        'promise/no-callback-in-promise': 0,
    'linebreak-style': 0,
  },
};
