export default defineNuxtConfig({
    modules: [
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
