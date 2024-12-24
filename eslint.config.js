import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      camelcase: ['warn', { properties: 'always' }],
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignorePattern: 'pragma|ignored',
          ignoreInlineComments: true,
        },
      ],
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
      complexity: ['warn', { max: 4 }],
      curly: 'error',
      'default-case': 'error',
      'no-await-in-loop': 'error',
      'no-duplicate-imports': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-useless-assignment': 'error',
      'default-param-last': 'error',
      'no-console': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'max-depth': ['error', 2],
      'max-nested-callbacks': ['error', 2],
      'max-lines': ['error', { max: 150, skipComments: true }],
      'init-declarations': ['error', 'always'],
      'arrow-body-style': ['warn', 'as-needed'],
      'block-scoped-var': 'warn',
      'dot-notation': 'warn',
      'id-length': ['warn', { min: 3 }],
      'no-alert': 'warn',
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-template': 'warn',
      'no-magic-numbers': 'error',
      'no-implicit-globals': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-unneeded-ternary': 'error',
      'no-shadow': [
        'error',
        {
          builtinGlobals: false,
          hoist: 'functions',
          ignoreOnInitialization: false,
        },
      ],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      eqeqeq: 'error',

      // Backend-specific rules
      'global-require': 'error',
      'callback-return': ['warn', ['callback', 'cb']],
      'no-mixed-requires': 'warn',
      'no-process-env': 'warn',
      'no-process-exit': 'warn',
      'no-sync': 'warn',
    },
  }
);
