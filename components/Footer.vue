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
const { find } = useStrapi()
const response: any = await useAsyncData(
    'social',
    () => find('socials', {
        populate: '*'
    })
)

const socials = response.data.value.data
</script>