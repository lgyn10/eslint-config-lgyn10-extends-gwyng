module.exports = {
  extends: ['universe/native'],
  plugins: ['sort-imports-es6-autofix', 'unused-imports'],
  rules: {
    'no-sequences': 'off',
    'import/order': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    "quotes": ["error", "single"],
    'prettier/prettier': ['error', { printWidth: 500 }],
  },
};
