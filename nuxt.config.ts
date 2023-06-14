export default defineNuxtConfig({
    modules: [
        '@nuxtjs/strapi',
        '@nuxt/content',
        '@nuxt/image-edge',
    ],
    css: ['@/assets/scss/app.scss'],
    plugins: [],
    image: {
        strapi: {
        }
    },
});
