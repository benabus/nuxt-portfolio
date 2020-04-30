
<script>
import HeroSection from '@/components/hero';
import AboutSection from '@/components/about';
import SkillsSection from '@/components/skills';
import ProjectsSection from '@/components/projects';


export default {
    components: {
        HeroSection,
        AboutSection,
        SkillsSection,
        ProjectsSection
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {},
    head(){
        return {
            // title: "THIS IS A TEST"
        }
    }
};
</script>



<template>
    <div>
        <a id="home" class="bookmark"></a>
        <section>
            <hero-section></hero-section>
        </section>
        <hr />
        <section>
            <a id="about" class="bookmark"></a>
            <h2>About Me</h2>
            <about-section></about-section>
        </section>
        <hr />
        <section>
            <a id="skills" class="bookmark"></a>
            <h2>Enumerated Qualifications</h2>
            <skills-section></skills-section>
        </section>
        <hr />
        <section>
            <a id="projects" class="bookmark"></a>
            <h2>Software Projects</h2>
            <projects-section></projects-section>
        </section>
    </div>
</template>