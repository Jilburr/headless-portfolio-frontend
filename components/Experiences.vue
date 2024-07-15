<template>
    <section class="experiences">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <template
                        v-for="(experience, i ) in experiences"
                        :key="i"
                    >
                        <ExperienceItem :experience="experience.attributes" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/experiences?populate=*&sort=id:asc`, {})
const experiences = response.data.value.data
</script>
