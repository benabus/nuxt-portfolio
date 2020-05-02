<script>
import Poncho from '@/components/poncho.vue';
export default {
    components: {
        Poncho
    }
};
</script>
<template>
    <div class="hero">
        <div class="d-flex justify-content-between">
            <div class="hero-text">
                <h1>Ben Serrette</h1>
                <div class="subtitle">Front-end Mid Stack Web Developer</div>
                <div class="icons">
                    <a href="https://github.com/benabus/"
                       target="_blank">
                        <fa :icon="['fab', 'github']" /></a>
                    <a href="https://www.linkedin.com/in/benserrette/"
                       target="_blank">
                        <fa :icon="['fab', 'linkedin']" /></a>
                </div>
            </div>
            <div class="main-poncho d-none d-md-block">
                <poncho fill-image="/assets/img/code_sample.png" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';


.main-poncho {
    width: 50%;
    padding-top: 2rem;
    fill: $yellow;
    stroke: black;

    svg {
        margin-right: -9rem;
    }
}

.icons {
    margin-top: 1rem;
    font-size: 2.5rem;

    a {
        margin-right: 1rem;
        path {
            stroke-width: 10;
            stroke: black;
        }
    }
}
</style>