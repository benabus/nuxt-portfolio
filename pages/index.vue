
<script>
import HeroSection from '@/components/hero';
import AboutSection from '@/components/about';
import SkillsSection from '@/components/skills';
// import ProjectsSection from '@/components/projects';

export default {
    layout: 'home',
    components: {
        HeroSection,
        AboutSection,
        SkillsSection,
        // ProjectsSection
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {},

    head() {
        return {
            titleTemplate: "Ben Serrette's Portfolio",
            meta: [
                { hid: 'og:title', property: 'og:title', content:`Ben Serrette's Portfolio`},
                { hid: 'og:description', property: 'og:description', content: 'Front-end Mid Stack Web Developer'},
                { hid: 'og:url', property: 'og:url', content:`http://benserrette.com/`}
            ]
        };
    }
};
</script>



<template>
    <div>
        <a id="home"
           class="bookmark"></a>
        <section class="hero-container container pt-0">
            <hero-section></hero-section>
        </section>
        <hr class="mt-0" />
        <section class="container rounded">
            <a id="about"
               class="bookmark"></a>
            <h2>About Me</h2>
            <about-section></about-section>
        </section>
        <hr class="" />
        <!-- <section class="container">
            <a id="projects"
               class="bookmark"></a>
            <h2>Projects</h2>
            <projects-section></projects-section>
        </section>
        <hr class="" /> -->
        <!-- <section class="container">
            <a id="illustration"
               class="bookmark"></a>
            <h2>Illustrations</h2>
            <projects-section project-type="illustration"></projects-section>
        </section>-->
        <hr class="" /> 
        <section class="container">
            <a id="skills"
               class="bookmark"></a>
            <h2>Things I'm Good At</h2>
            <skills-section :level="0"></skills-section>
        </section>
        <hr class="" /> 
        <section class="container">
            <a id=""
               class="bookmark"></a>
            <h2>Other Things I've Worked With</h2>
            <skills-section :level="1"></skills-section>
        </section>
    </div>
</template>