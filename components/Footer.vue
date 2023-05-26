<template>
    <footer>
        <div class="d-flex flex-column flex-md-row justify-content-start justify-content-md-center">
            <template v-for="item in response.data">
                <NuxtLink :href="item.attributes.url">
                    {{ item.attributes.service }}
                </NuxtLink>
            </template>
        </div>
    </footer>
</template>

<script setup>
const { find } = useStrapi()
const response = await find('socials', {
    populate: '*'
})
</script>