<template>
    <section class="experiences">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ExperienceItem v-for="(experience, i ) in experiences.data" :key="i"
                        :experience="experience.attributes" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { find } = useStrapi()
const experiences = await find('experiences', {
    populate: '*'
})
</script>