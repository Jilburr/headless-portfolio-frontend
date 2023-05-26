<template>
    <h4>{{ props.skillgroup.attributes.name }}</h4>
    <div class="skills__parent">
        <div class="row gy-1">
            <template v-for="skill in skills.data">
                <SkillItem :skill="skill.attributes" v-if="skill.attributes.skillgroup.data.id === props.skillgroup.id" />
            </template>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skillgroup: {
        type: Object
    }
})
const { find } = useStrapi()
const skills = await find('skills', {
    populate: '*'
})
</script>