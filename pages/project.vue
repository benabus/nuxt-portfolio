<template>
<div class="card p-4">
    <div>
        <figure class="float-right pr-0 col-4 text-center">
            <img v-if="project.image"
                class="rounded border img-fluid "
                :src="projectCoverImage">
        </figure>
        <h2>{{project.title}}</h2>
        <p v-if="project.url">
            <a :href="project.url"
                target="_blank"
                rel="noopener noreferrer">{{project.url}}</a>
        </p>
        <p v-if="project.blurb"
            class="p"
            v-html="project.blurb"></p>
        <div class="mt-2 mb-4">
            <router-link v-for="tag in project.tags && project.tags.slice(0).sort()"
                :key="tag"
                class="btn btn-outline-primary badge px-2 py-1 mr-1"
                :to="{name: 'tag', params: {tag: getTagStub(tag)}}">{{tag}}</router-link>
        </div>
        <!-- <div class="clearfix"></div> -->
        <!-- <hr class="d-inline w-100" /> -->
        <component :is="project_stub"></component>
    </div>
</div>
</template>
<script>
// import CaptainNumbskull from "../projects/CaptainNumbskull";
// import Strips4Singles from "../projects/Strips4Singles";
// import HourComicDay2014 from "../projects/24HourComicDay2014";
// import AnatomyOfASnake from "../projects/AnatomyOfASnake";
// import CAM from "../projects/CAM";
// import Enso from "../projects/Enso";
// import Hoaxy from "../projects/Hoaxy";
// import IllustratedGuide from "../projects/IllustratedGuide";
// import InfiniteCanvas from "../projects/InfiniteCanvas";
// import OSoMe from "../projects/OSoMe";
// import PoonheadsTheComic from "../projects/PoonheadsTheComic";
// import ShakeItTarot from "../projects/ShakeItTarot";
// import SquadAndTreaty from "../projects/SquadAndTreaty";
// import THADJ from "../projects/THADJ";
// import TheStache from "../projects/TheStache";

// export default
// {
//     components:
//     {
//         "captain-numbskull-in-space": CaptainNumbskull,
//         "strips-4-singles": Strips4Singles,
//         "twenty-four-hour-comic-day-2014": HourComicDay2014,
//         "anatomy-of-a-snake": AnatomyOfASnake,
//         "cam": CAM,
//         "enso": Enso,
//         "hoaxy": Hoaxy,
//         "an-illustrated-guide-to-programming-for-absolute-beginners-and-the-computer-illiterate": IllustratedGuide,
//         "infinite-canvas-2-0": InfiniteCanvas,
//         "osome": OSoMe,
//         "poonheads-the-comic": PoonheadsTheComic,
//         "shake-it-tarot": ShakeItTarot,
//         "squad-and-treaty": SquadAndTreaty,
//         "thadj": THADJ,
//         "the-stache": TheStache
//     },
//     data()
//     {
//         return {
//             project_stub: "",
//             project:
//             {}
//         }
//     },
//     computed:
//     {
//         projectCoverImage()
//         {
//             return require('/assets/img/project_covers/' + this.project.image);
//         }
//     },
//     watch: {
//         "project.title"(){
//             window.document.title = this.project.title + " - BenSerrette.com";
//         }
//     },
//     mounted()
//     {
//         this.project_stub = this.$route.params.stub;
//         this.project = this.$store.getters.project(this.project_stub);
//         if(!this.project)
//         {
//             this.$router.push({name: "error404"});
//         }
//         return false;
//         // window.document.title = this.project.title + " - BenSerrette.com";
//     },
//     methods:
//     {
//         getTagStub(tag)
//         {
//             return tag.replace(" ", "-")
//                 .toLowerCase();
//         }
//     }
// }
</script>

<style lang="scss" scoped>

</style>
