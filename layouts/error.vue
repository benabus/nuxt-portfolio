<script >
export default {
    props: {
        error: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        imageFilename() {
            const num = Math.floor(Math.random() * 6 + 1);
            return require('@/static/assets/img/404-' + num + '.png');
        }
    },
    mounted() {
        // window.document.title="Error 404 - File not found - BenSerrette.com";
    }
};
</script>
<template>
    <div class="">
        <div class="d-flex align-items-center flex-column">
            <div class="d-sm-flex justify-content-end align-items-center">
                <h2 class="h1 pr-sm-5">Error {{error.status_code}}</h2>
                <h3>File Not Found</h3>
            </div>
            <!-- <hr /> -->
            <p v-if="error.statusCode === 404">The page or project you were looking for was not found.</p>
            <div class="">
                <img class="img-fluid rounded"
                     :src="imageFilename"
                     alt="404 image" />
            </div>
        </div>
    </div>
</template>