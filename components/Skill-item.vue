<template>
    <span class="col-12 col-md-7">{{ props.skill.name }}</span>
    <div class="col-12 col-md-5 d-flex align-items-center">
        <div class="skills__bar-bg">
            <div :style="'width:' + props.skill.percentage + '%'" class="skills__bar-progress"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skill: {
        type: Object
    }
})
</script>