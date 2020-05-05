<script>
import HeaderNav from '@/components/header';
import MainFooter from '@/components/footer';


export default {
    components: {
        HeaderNav,
        MainFooter
    },
    data() {
        return {};
    },
    computed: {
        page_name() {
            return this.$route.name;
        },

    },
    mounted() {},
    head() {
        return {
            titleTemplate: "%s - Ben Serrette's Portfolio",
            
            meta: [
                { hid: 'og:title', property: 'og:title', content:`${this.page_name} - Ben Serrette's Portfolio`},
                { hid: 'og:description', property: 'og:description', content: this.page_name},
                { hid: 'og:url', property: 'og:url', content:`http://benserrette.com/${this.page_name}`}
            ]
        };
    }
};
</script>


<template>
    <div>

        <header-nav />
        <main class="container">
            <nuxt ref="page" />
        </main>

        <main-footer />

    </div>
</template>

<style lang="scss" scoped>
</style>