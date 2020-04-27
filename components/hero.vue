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
            <div class="">
                <h1>Ben Serrette</h1>
                <div class="subtitle">Front-end Mid Stack Web Developer</div>
            </div>
            <div class="main-poncho d-none d-md-block">
                <poncho 
                fill-image="/assets/img/code_sample.png"
                />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.main-poncho
{
    width: 50%;
    padding-top: 2rem;
    fill: $yellow;
    stroke: black;
}


</style>