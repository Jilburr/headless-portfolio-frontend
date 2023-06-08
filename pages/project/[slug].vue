<template>
    <div>
        <NuxtLayout name="default" :project-title="project.title">
            <section class="project block--margin">
                <div class="project__header">
                    <h2 class="mb-0">{{ project.title }}</h2>
                    <a target="blank_" :href="project.WebsiteLink" v-if="project.WebsiteLink">
                        <PhArrowSquareOut :size="32" weight="light" />
                    </a>
                    <a target="blank_" :href=project.RepositoryLink v-if="project.RepositoryLink">
                        <PhGithubLogo :size="32" weight="light" />
                    </a>
                </div>
                <div class="project__image-container">
                    <NuxtImg provider="strapi" :src="image.url" :alt="image.alternativeText" />
                </div>
                <div class="project__content">
                    <MarkdownStringRenderer :markdownString="project.content" />
                </div>
                <Solutions :solutions="solutions" />
            </section>
            <!-- <Projects /> -->
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
// @ts-expect-error avoid lint error
import type { Project } from '~/types'
import { PhArrowSquareOut, PhGithubLogo } from "@phosphor-icons/vue";

const { findOne } = useStrapi()

const route = useRoute()
const projectSlug: string = route.params.slug.toString()

const { data: response }: any = await useAsyncData(
    'project',
    () => findOne<Project>('projects', {
        filters: {
            slug: { $eq: projectSlug }
        },
        populate: ['image', 'solutions.image']
    })
)
const project = response.value.data[0].attributes
let image = project.image.data.attributes
let solutions = project.solutions.data
console.log(project)

definePageMeta({
    layout: false
})
</script>