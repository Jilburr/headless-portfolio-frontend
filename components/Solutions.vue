<template>
    <div class="project__solutions">
        <template v-for="(solution, i) in props.solutions">
            <template v-if="i + 1 !== props.solutions.length">
                <div>
                    <NuxtImg provider="strapi" width="100" height="100" :src="solution.attributes.image.data.attributes.url"
                        :alt="solution.attributes.alternativeText" />
                </div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
            </template>
            <template v-else>
                <div>
                    <NuxtImg provider="strapi" width="100" height="100" :src="solution.attributes.image.data.attributes.url"
                        :alt="solution.attributes.alternativeText" />
                </div>
            </template>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    solutions: Object
})
</script>