<script>
const now = new Date();
export default {
    data() {
        return {
            year: now.getFullYear()
        };
    }
};
</script>

<template>
    <div>
        <hr class="clearfix invisible" />

        <footer>
            <div>
                <div class="container d-md-flex justify-content-between">
                    <div class="">
                        &copy; <span v-text="year">2020</span> Ben Serrette
                    </div>
                    <div class="small">
                        Website created using Nuxt.js and Bootstrap
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

footer {
    overflow: hidden;
    padding-top: 1rem;
    & > div {
        padding-top: 1rem;
        padding-bottom: 1rem;
        box-shadow: $top-shadow;
    }
}
</style>