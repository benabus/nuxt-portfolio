<script>
import Cadre from '@/pages/cadre';
import Enso from '@/pages/enso';
import Hoaxy from '@/pages/hoaxy';
import Osome from '@/pages/osome';

const PROJECT_DATA = {
    cadre: Cadre.data(),
    enso: Enso.data(),
    hoaxy: Hoaxy.data(),
    osome: Osome.data()
};

export default {
    data() {
        return {
            project_data: PROJECT_DATA
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
                <a :href="`/${stub}`">
                    <div class="card-img-top"
                         :style="{
                            'background-image': `url(${project.cover_image})`
                         }">
                        <img class=""
                             :src="project.cover_image"
                             :alt="project.cover_image_alt || 'Project Image'" />
                    </div>
                    <div class="card-body">
                        <h3 v-text="project.title"></h3>
                        <div class="subtitle" v-text="project.subtitle"></div>
                        <p v-text="project.blurb"></p>
                    </div>
                </a>
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
a
{
    text-decoration: none;
}
</style>