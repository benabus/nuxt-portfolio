<script>
import HeaderNav from '@/components/header';
import MainFooter from '@/components/footer';

export default {
    components: {
        HeaderNav,
        MainFooter
    },
    head() {
        return {
            titleTemplate: "%s - Ben Serrette's Portfolio"
        };
    }
};
</script>


<template>
    <div>

        <header-nav />

        <main>
            <nuxt />
        </main>

        <main-footer />

    </div>
</template>

<style lang="scss" scoped>

</style>