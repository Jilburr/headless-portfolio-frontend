<template>
    <header class="block--margin">
        <h1>
            <NuxtLink to="/">
                Jilbert
            </NuxtLink>
            <template v-if="props.projectTitle">
                <hr />
                <span class="project-title">
                    {{ props.projectTitle }}
                </span>
            </template>
        </h1>
    </header>
</template>

<script setup>
const props = defineProps({
    projectTitle: String
})
</script>