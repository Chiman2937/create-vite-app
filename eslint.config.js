import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import perfectionist from 'eslint-plugin-perfectionist';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      perfectionist: perfectionist,
    },
    rules: {
      'no-unused-vars': 'off', // JS용 기본 비활성화
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // export 정렬
      'simple-import-sort/exports': 'warn',
      // import 정렬
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // CSS imports
            ['\\.css$'],
            // Next.js (일반 import)
            ['^next(?!.*type)'],
            // Next.js (type import)
            ['^next.*\\u0000$'],
            // React (일반 import)
            ['^react(?!.*type)'],
            // React (type import)
            ['^react.*\\u0000$'],
            // 서드파티 (외부 라이브러리)
            ['^@?\\w'],
            // 로컬 파일 (@/ 경로)
            ['^@/'],
            // 상대 경로
            ['^\\.'],
          ],
        },
      ],
      // JSX 속성 정렬
      'perfectionist/sort-jsx-props': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
          groups: ['key', 'ref', 'id', 'className', 'style', 'unknown', 'callback'],
          customGroups: {
            key: 'key',
            ref: 'ref',
            id: 'id',
            className: 'className',
            style: 'style',
            callback: '^on[A-Z].*',
          },
        },
      ],
    },
  },
]);
