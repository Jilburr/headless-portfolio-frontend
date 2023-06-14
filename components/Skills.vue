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
const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/skillgroups?populate=*`, {})

const skillgroups = response.data.value.data
</script>