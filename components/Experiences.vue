<template>
    <section class="experiences">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ExperienceItem v-for="(experience, i ) in experiences" :key="i" :experience="experience.attributes" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { find } = useStrapi()

const response: any = await useAsyncData(
    'experience',
    () => find('experiences', {
        populate: '*'
    })
)
const experiences = response.data.value.data
</script>
