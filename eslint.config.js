import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['src/**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      // Core best practices
      curly: 'error',
      eqeqeq: 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-eval': 'error',
      'block-scoped-var': 'error',
      'default-param-last': 'error',
      'dot-notation': 'warn',

      // Security rules
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-buffer-constructor': 'error',

      // Style rules
      camelcase: ['warn', { properties: 'always' }],
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignorePattern: 'pragma|ignored',
          ignoreInlineComments: true,
        },
      ],
      'arrow-body-style': ['warn', 'as-needed'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

      // Import/export rules
      'no-duplicate-imports': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
          allowSeparatedGroups: false,
        },
      ],

      // Node.js specific
      'global-require': 'error',
      'callback-return': ['warn', ['callback', 'cb']],
      'no-mixed-requires': 'warn',
      'no-process-env': 'warn',
      'no-process-exit': 'warn',
      'no-sync': 'warn',

      // Complexity rules
      complexity: ['warn', { max: 10 }],
      'max-depth': ['error', 3],
      'max-nested-callbacks': ['error', 3],
      'max-lines': ['error', { max: 300, skipComments: true }],
      'max-params': ['warn', 4],
      'max-statements': ['warn', 15],

      // Variable rules
      'init-declarations': ['error', 'always'],
      'no-shadow': [
        'error',
        {
          builtinGlobals: false,
          hoist: 'functions',
          ignoreOnInitialization: false,
        },
      ],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-use-before-define': ['error', { functions: false, classes: true }],

      // Misc
      'no-implicit-globals': 'error',
      'no-magic-numbers': ['error', { ignore: [0, 1], detectObjects: true }],
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': ['error', 'always'],
      'no-unneeded-ternary': 'error',
    },
  }
);
