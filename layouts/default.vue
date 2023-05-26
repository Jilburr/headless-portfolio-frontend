<template>
    <Header class="col-12" :project-title="projectTitle" />
    <main class="col-12 offset-md-1 col-md-11 offset-lg-2 col-lg-8 ps-lg-10 pe-lg-7">
        <slot />
    </main>
    <Footer class="col-12 offset-md-1 col-md-11 offset-lg-2 col-lg-8 ps-lg-10 pe-lg-7" />
</template>

<script setup>
const props = defineProps({
    projectTitle: String
})
</script>
