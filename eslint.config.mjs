import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';

const compat = new FlatCompat();

export default [
    // Используем рекомендованные настройки Vue.js
    ...compat.extends('plugin:vue/vue3-recommended'),

    // Используем рекомендованные настройки Nuxt
    ...compat.extends('plugin:nuxt/recommended'),

    ...compat.extends('plugin:@typescript-eslint/recommended'),

    // Настройки Prettier
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': 'error', // Вывод ошибок Prettier как ошибок ESLint
        },
    },

    // Отключаем конфликты с Prettier
    ...compat.extends('eslint-config-prettier'),

    {
        ignores: [
            'node_modules',
            '.nuxt',
            '.output',
            'dist', // Игнорировать папку dist (собранные файлы)
        ],
    },

    // Кастомные правила (добавь, если потребуется)
    {
        files: ['**/*.vue', '**/*.js', '**/*.ts'],
        rules: {
            //
        },
    },

    // Vue parser options
    {
        parser: 'vue-eslint-parser',
        parserOptions: {
            parser: '@typescript-eslint/parser',
            sourceType: 'module',
        },
    },
];
