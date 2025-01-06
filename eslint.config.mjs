import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
    // Используем рекомендованные настройки Vue.js
    ...compat.extends("plugin:vue/vue3-recommended"),

    // Используем рекомендованные настройки Nuxt
    ...compat.extends("plugin:nuxt/recommended"),

    {
        ignores: [
            "node_modules",
            ".nuxt",
            ".output",
            "dist", // Игнорировать папку dist (собранные файлы)
        ],
    },

    // Кастомные правила (добавь, если потребуется)
    {
        files: ["**/*.vue", "**/*.js", "**/*.ts"],
        rules: {
            //
        },
    },
];
