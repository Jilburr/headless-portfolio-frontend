export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi',
        '@nuxt/content',
        '@nuxt/image-edge',
    ],
    css: ['@/assets/scss/app.scss'],
    plugins: [],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
    },
    image: {
        strapi: {
        }
    }
});
