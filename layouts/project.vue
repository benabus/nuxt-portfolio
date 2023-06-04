<script>
import HeaderNav from '@/components/header';
import MainFooter from '@/components/footer';

import Pages from '@/assets/pages_data.js';

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
        page() {
            return Pages[this.page_name] || {};
        },
        title() {
            return this.page.title;
        },
        cover_image() {
            return this.page.cover_image;
        },
        cover_image_caption() {
            return this.page.cover_image_caption;
        },
        subtitle() {
            return this.page.subtitle;
        },
        blurb() {
            return this.page.blurb;
        }
    },
    mounted() {},
    head() {
        return {
            title: this.page.title,
            titleTemplate: "%s - Ben Serrette's Portfolio",
            meta: [
                { hid: 'og:title', property: 'og:title', content:`${this.page.title} - Ben Serrette's Portfolio`},
                { hid: 'og:description', property: 'og:description', content: this.page.subtitle},
                { hid: 'og:url', property: 'og:url', content:`http://benserrette.com/${this.page_name}`},
                { hid: 'og:image', property: 'og:image', content:`http://benserrette.com${this.cover_image}`},
            ]
        };
    }
};
</script>


<template>
    <div>

        <header-nav />
        <main class="container">
            
            <h1 v-text="title"></h1>
            <div class="subtitle"
                 v-text="subtitle"></div>

            <p v-if="blurb"
               class="pt-3"
               v-text="blurb"></p>

            <hr />

            <div v-if="cover_image"
                 class="card float-md-right mb-3 ml-md-3 col-12 col-md-4 p-3">
                <img class="card-img-top"
                     :src="cover_image"
                     :alt="cover_image_caption" />
                <div v-if="cover_image_caption"
                     class="figure-caption text-center card-body"
                     v-text="cover_image_caption"></div>
            </div>


            <nuxt ref="page" />
        </main>

        <main-footer />

    </div>
</template>

<style lang="scss" scoped>
</style>