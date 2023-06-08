<template>
    <section class="skills" v-for="skillgroup in skillgroups">
        <div class="row">
            <div class="col-12">
                <SkillGroup :skillgroup="skillgroup" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { find } = useStrapi()
const response: any = await useAsyncData(
    'skillgroup',
    () => find('skillgroups', {
        populate: '*'
    })
)

const skillgroups = response.data.value.data
</script>