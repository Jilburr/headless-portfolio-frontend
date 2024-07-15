<template>
    <div>
        <NuxtLayout
            name="default"
            :project-title="project.title"
        >
            <section class="project block--margin">
                <div class="project__header">
                    <h2 class="mb-0">{{ project.title }}</h2>
                    <a
                        target="blank_"
                        :href="project.WebsiteLink"
                        v-if="project.WebsiteLink"
                    >
                        <PhArrowSquareOut
                            :size="32"
                            weight="light"
                        />
                    </a>
                    <a
                        target="blank_"
                        :href=project.RepositoryLink
                        v-if="project.RepositoryLink"
                    >
                        <PhGithubLogo
                            :size="32"
                            weight="light"
                        />
                    </a>
                </div>
                <div class="project__image-container">
                    <NuxtImg
                        provider="strapi"
                        :src="image.url"
                        :alt="image.alternativeText"
                    />
                </div>
                <div class="project__content">
                    <MarkdownStringRenderer :markdownString="project.content" />
                </div>
                <Solutions :solutions="solutions" />
            </section>
            <Projects :current-id="currentId" />
        </NuxtLayout>
    </div>
</template>

<script setup>
import { PhArrowSquareOut, PhGithubLogo } from "@phosphor-icons/vue";
const route = ref(useRoute())
const projectSlug = route.value.params.slug.toString()

const { data: response, pending, error, refresh } = await useFetch(`https://strapi-sjne.onrender.com/api/projects?filters[slug][$eq]=${projectSlug}&populate[0]=image&populate[1]=solutions.image`, {})

let project = response.value.data[0].attributes
let currentId = response.value.data[0].id
let image = project.image.data.attributes
let solutions = project.solutions.data

definePageMeta({
    layout: false
})
</script>