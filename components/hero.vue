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
                <!-- <div class="subtitle">People Leader &bull; Project Manager</div>
                <div class="subtitle">Former Developer and Illustrator</div> -->
                
                <div class="subtitle">
                    <span class="d-md-block">Developer</span>
                    <span class="d-md-none">&bull;</span>
                    <span class="d-md-block">Manager</span>
                    <span class="d-md-none">&bull;</span>
                    <span class="d-md-block">Leader</span>
                </div>
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

.subtitle
{
    white-space:  nowrap;
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