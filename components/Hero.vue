<template>
    <section class="hero block--margin">
        <div class="row">
            <div class="col-12">
                <h2>
                    <Typed :options="options">
                        <span class="typing"></span>
                    </Typed>
                </h2>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const response: any = await useFetch(`https://strapi-sjne.onrender.com/api/hero-text?populate=*`, {})

const heroText = response.data.value.data.attributes.content
const splittedHeroText = heroText.split(",")
let inputHeroText = splittedHeroText

const options: TypedOptions = {
    stringsElement: "#typed-strings",
    typeSpeed: 20,
    startDelay: 500,
    backDelay: 1200,
    strings: inputHeroText
};
</script>