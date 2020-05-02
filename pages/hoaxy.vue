<script>
export default {
    data() {
        return {
            title: 'Hoaxy',
            subtitle: '',
            cover_image: '/assets/img/project_covers/hoaxylogo.png',
            cover_image_alt: 'The Hoaxy Logo',
            blurb: ''
        };
    }
};
</script>

<template>
    <div>
        <div class="card float-md-right ml-md-3 mb-md-3 col-md-4">
            <img class="card-img-top"
                 :src="cover_image" :alt="cover_image_alt" />
            <div class="figure-caption text-center card-body">The Hoaxy logo</div>
        </div>

        <h1 v-text="title"></h1>
        <div class="subtitle"
             v-text="subtitle"></div>

        <hr />
        <blockquote class="blockquote">
            <p>
                Hoaxy is a tool that visualizes the spread of articles online. Articles can be found on Twitter, or in a corpus of claims and related fact checking.
            </p>
            <footer class="blockquote-footer">
                <cite>
                    <a href="http://hoaxy.iuni.iu.edu/faq.html#faq-q1"
                       target="_blank">The Hoaxy Website</a>
                </cite>
            </footer>
        </blockquote>

        <p>
            I began working on Hoaxy as a consultant in fall of 2016, but we were unable to get it launchable in time for the election. Months later, we got a grant to incorporate
            <a href="https://botometer.iuni.iu.edu/#!/"
               target="_blank">Botometer</a> into Hoaxy.
        </p>

        <p>
            As part of the grant, I was assigned as the lead front-end developer. We built the original prototype using JQuery, but because there would be a great deal more functionality added on for the grant, I elected to port the front-end to Vue.js.
            We also used
            <a href="http://nvd3.org/"
               target="_blank">NV.D3</a> for the timeline and
            <a href="http://sigmajs.org/"
               target="_blank">Sigma.js</a> for the network graph visualization.
        </p>

        <p>
            The members of the Hoaxy team have changed multiple times over the course of its development. It has been comprised primarily of graduate students. During my time as lead developer I was given the opportunity to train and mentor many of the incoming developers, in addition to my actual development work.
        </p>

        <p>
            Hoaxy is open source and its front-end can be found on
            <a href="https://github.com/IUNetSci/hoaxy-frontend"
               target="_blank">GitHub</a>.
        </p>
    </div>
</template>