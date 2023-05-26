export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi',
        '@nuxt/content',
        '@nuxt/image-edge',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
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
