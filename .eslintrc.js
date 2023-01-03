// const path = require('path');

module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react-native/all',
    '@react-native-community',
    'airbnb',
    'prettier',
  ],
  plugins: ['react-native', 'prettier', 'jest', 'detox', 'babel'],
  settings: {
    'import/resolver': {
      node: {
        // `react-native` default  extensions
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.ts',
          '.web.tsx',
          '.d.ts',
        ],
      },
      // [path.resolve('./scripts/eslint-plugin-import-resolver-file')]: {
      //   test: '.png',
      //   use: ['.png', '@1x.png', '@2x.png', '@3x.png'],
      // },
    },
  },
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  // prefer globals instead of disabling `no-undef` since we still have JS code and haven't fully migrated to TS
  globals: {
    JSX: 'readonly',
    Response: 'readonly',
  },
  rules: {
    // heidi
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.story.js',
          '**/*.story.tsx',
          '**/__tests__/**/*.ts',
          '**/__tests__/**/*.tsx',
          '**/__tests__/**/*.js',
          '**/__tests__/**/*.jsx',
          'scripts/*.js',
          'ci/scripts/*.js',
          '**/*.test.js',
          '**/*.test.ts',
          '**/*.test.tsx',
          'storybook/**/*.js',
          'storybook/**/*.ts',
          'storybook/**/*.tsx',
          'enzyme.setup.js',
          'app/__helpers__/**/*.ts',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    // Fix optional chaining with Typescript
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'react-native/split-platform-components': 'off',

    // eslint default
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'operator-assignment': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-rest-params': 'off',
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    camelcase: 'off',
    curly: [2, 'all'],

    // eslint-plugin-import
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'import/no-useless-path-segments': 'off',

    // eslint-plugin-react
    'react-native/no-unused-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/sort-styles': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': ['warn'],
    'react/no-access-state-in-setstate': 'off',
    'react/no-array-index-key': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-is-mounted': 'off',
    'react/no-string-refs': 'off',
    'react/no-typos': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['that', 'self'],
      },
    ],
    // for react components, we don't really care about explicitly
    // defining the return type of these lifecycle methods or function components
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // so it is possible to "omit" properties from an object
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks:
          '(useAsync|useAsyncCallback|useThrottledCallback|useThrottleNavigateCallback)',
      },
    ],
  },
};
