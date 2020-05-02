<script>
import HeaderNav from '@/components/header';
import MainFooter from '@/components/footer';

export default {
    components: {
        HeaderNav,
        MainFooter
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