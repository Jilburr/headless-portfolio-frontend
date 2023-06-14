<template>
    <footer>
        <div class="d-flex flex-column flex-md-row justify-content-start justify-content-md-center">
            <template v-for="item in socials">
                <NuxtLink :href="item.attributes.url">
                    {{ item.attributes.service }}
                </NuxtLink>
            </template>
        </div>
    </footer>
</template>

<script setup lang="ts">
const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/socials?populate=*`, {})

const socials = response.data.value.data
</script>