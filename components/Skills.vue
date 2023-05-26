<template>
    <section class="skills" v-for="skillgroup in skillgroups.data">
        <div class="row">
            <div class="col-12">
                <SkillGroup :skillgroup="skillgroup" />
            </div>
        </div>
    </section>
</template>

<script setup>
const { find } = useStrapi()
const skillgroups = await find('skillgroups', {
    populate: '*'
})
</script>