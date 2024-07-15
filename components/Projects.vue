<template>
    <section class="projects block--margin">
        <div class="row">
            <div class="col-12">
                <div
                    v-for="(project, i) in projects"
                    :key="i"
                    class="projects__item"
                >
                    <template v-if="project.id !== props.currentId">
                        <div class="row">
                            <span class="col-2">0{{ i + 1 }}</span>
                            <NuxtLink
                                :to="project.attributes.WebsiteLink"
                                target="_blank"
                                class="col-10"
                                @mouseenter="this.querySelector('svg').classList.remove('d-none')"
                            >
                                <h3 class="hover-underline-animation">
                                    {{ project.attributes.title }}
                                    <PhArrowSquareOut
                                        class="d-none"
                                        :size="32"
                                        weight="light"
                                    />
                                </h3>
                            </NuxtLink>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script
    setup
    lang="ts"
>
import { PhArrowSquareOut } from "@phosphor-icons/vue";
const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/projects?sort=id:asc`, {})

const projects = response.data.value.data

const props = defineProps({
    currentId: {
        type: Number
    }
})
</script>
