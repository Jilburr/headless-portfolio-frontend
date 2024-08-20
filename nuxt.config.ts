export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/image-edge',
    ],
    css: ['@/assets/scss/app.scss'],
    image: {
        strapi: {
        }
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                },
            ],
            htmlAttrs: {
                lang: 'en'
            },
        },
    },
});
