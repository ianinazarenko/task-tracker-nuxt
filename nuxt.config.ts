// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    typescript: {
        typeCheck: true,
    },

    css: [
        // Add your global CSS files here
        '~/globals.css',
    ],

    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                Roboto: true,
            },
        }],
    ],
});