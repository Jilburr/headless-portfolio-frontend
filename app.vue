<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script
  setup
  lang="ts"
>
const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/global?populate[0]=defaultSeo&populate[1]=defaultSeo.shareImage`, {})
const meta = response.data.value?.data?.attributes
const metaTitle = meta?.defaultSeo?.metaTitle
const metaDescription = meta?.defaultSeo?.metaDescription
const metaImage = meta?.defaultSeo?.shareImage?.data.attributes.url

useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  ogImage: metaImage,
})
</script>