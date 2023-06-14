<template>
    <section class="projects block--margin">
        <div class="row">
            <div class="col-12">
                <div v-for="(project, i) in projects" :key="i" class="projects__item">
                    <div class="row">
                        <span class="col-2">0{{ i + 1 }}</span>
                        <NuxtLink :to="'/project/' + project.attributes.slug" class="col-10">
                            <h3 class="hover-underline-animation">
                                {{ project.attributes.title }}
                            </h3>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/projects?fields[0]=title&fields[1]=slug`, {})

const projects = response.data.value.data
</script>
