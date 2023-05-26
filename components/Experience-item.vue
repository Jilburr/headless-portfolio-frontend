<template>
    <article :id="key">
        <div class="row">
            <div class="col-12 col-md-1">
                <span>{{ props.experience.date }}</span>
            </div>
            <div class="col-12 col-md-1 pe-md-2">
                <hr />
            </div>
            <div class="col-12 col-md-10">
                <MarkdownStringRenderer :markdownString="props.experience.content" />
            </div>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        default: 0
    },
    experience: {
        type: Object
    }
})

</script>