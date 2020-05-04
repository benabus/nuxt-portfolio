<script>

import {software, illustration} from '@/assets/pages_data.js';

export default {
    props: {
        projectType: {
            type: String,
            default: "software"
        }
    },
    data() {
        return {
            project_data: this.projectType === "software"?software:illustration
        };
    }
};
</script>

<template>
    <div class="d-flex flex-wrap mt-3">
        <div v-for="(project, stub) in project_data"
             :key="stub"
             class=" col-md-4 mb-3">
            <div class="card">
                <nuxt-link :to="`/${stub}`">
                    <div class="card-img-top"
                         :style="{
                            'background-image': `url(${project.cover_image})`
                         }">
                        <img class=""
                             :src="project.cover_image"
                             :alt="project.cover_image_caption || 'Project Image'" />
                    </div>
                    <div class="card-body">
                        <h3 v-text="project.title"></h3>
                        <div class="subtitle"
                             v-text="project.subtitle"></div>
                        <!-- <p v-text="project.blurb"></p> -->
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-img-top {
    height: 10rem;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    img {
        max-width: 100%;
        display: none;
    }
}
.card
{
    height: 100%;
}
a {
    text-decoration: none;
}
</style>