<script>
import HeaderNav from '@/components/header';
import MainFooter from '@/components/footer';

export default {
    components: {
        HeaderNav,
        MainFooter
    },
    data() {
        return {
            page: {
                title: '',
                'cover-image': '',
                'cover-image-caption': '',
                subtitle: '',
                blurb: ''
            }
        };
    },
    computed: {
        meta() {
            return (
                (this.$refs.page &&
                    this.$refs.page.$children &&
                    this.$refs.page.$children[0].$metaInfo) ||
                {}
            );
        },
        title() {
            return this.page.title;
        },
        cover_image() {
            return this.page['cover-image'];
        },
        cover_image_caption() {
            return this.page['cover-image-caption'];
        },
        subtitle() {
            return this.page.subtitle;
        },
        blurb() {
            return this.page.blurb;
        }
    },
    mounted() {
        const meta = this.$refs.page.$children[0].$metaInfo.meta;
        for (const item of meta) {
            const key = item.hid.split('page-')[1];
            this.page[key] = item.content;
        }
        if (process.browser) {
            for (const item of Object.keys(this.page)) {
                const elem = document.querySelector(
                    `[data-hid="page-${name}"]`
                );
                if (!elem) {
                    return '';
                }
                this.page[item] = elem.getAttribute('content');
            }
        } else {
            // return '';
            // console.debug('TEST');
        }
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
        <main class="container">
            <div v-if="cover_image"
                 class="card float-md-right ml-md-3">
                <img class="card-img-top"
                     :src="cover_image"
                     :alt="cover_image_caption" />
                <div v-if="cover_image_caption"
                     class="figure-caption text-center card-body"
                     v-text="cover_image_caption"></div>
            </div>

            <h1 v-text="title"></h1>
            <div class="subtitle"
                 v-text="subtitle"></div>

            <hr />

            <nuxt ref="page" />
        </main>

        <main-footer />

    </div>
</template>

<style lang="scss" scoped>
</style>