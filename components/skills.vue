<script>
export default {
    data() {
        return {
            skills: {
                JavaScript: [
                    'Vue.js',
                    'Nuxt',
                    // 'AngularJS',
                    'jQuery',
                    // 'ES6',
                    // 'Promises',
                    // 'Closures',
                    // 'AJAX'
                ],
                HTML: ['HTML5', 'XHTML',
                //  'Semantic HTML5'
                 ],
                CSS: ['Sass',
                //  'CSS3', 
                 'Bootstrap 4'],
                Python: ['Flask'],
                PHP: [],
                SQL: ['MySQL', 'PostgreSQL'],
                Git: ['Github'],
                Design: [
                    // 'UX Design',
                    // 'UI Design',
                    'User Experience (UX)',
                    'Interfaces',
                    'Responsive'
                ],
                Middleware: ['REST APIs', 'JSON', 'AWS'],
                'Build Tools': ['Node.js', 'NPM', 'Gulp'],
                'Data Visualization': ['D3', 'Sigma.js'],
                'Agile Development': [
                    'Certified Professional Scrum Master (PSMI)',
                    'Jira',
                    'Slack'
                ],
                Illustration: [
                    'Graphical Storytelling (Storyboarding)',
                    'Comics',
                    ],
                'Soft Skills': ['Healthy sense of humor', 'Good looking'],
                Troubleshooting: [
                    'A/V Setups',
                    'Teleconferencing',
                    'Zoom',
                    'Wire jiggling'
                ],
                'Tough Stuff': ['Network Science', 'Big Data (Hadoop)']
            },
            stack: {
                'Vue.js': 'vue_logo.svg',
                Python: 'python_logo.svg',
                Apache: 'apache_logo.svg',
                Postgresql: 'postgresql_logo.svg'
            }
        };
    }
};
</script>

<template>
    <div class="d-flex flex-column flex-md-row">

        <ul class="list-unstyled two-column">
            <li v-for="(items, category) in skills"
                :key="category"
                class="">
                <span v-text="category"></span>
                <div v-if="items.length > 0">
                    <span v-text="items.join(', ')"></span>
                </div>
            </li>
        </ul>

        <div class="stack d-flex flex-md-column flex-row justify-content-around ml-md-3"
             title="The VPAP Stack">
            <div v-for="(image, name) in stack"
                 :key="name"
                 class="stack-item">
                <img :src="`/assets/img/${image}`"
                     :alt="name" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.two-column {
    column-count: 2;
    column-gap: 1rem;
}
.two-column li {
    break-before: left;
    break-after: right;
    break-inside: avoid;
}
li div {
    font-size: 0.875rem;
    margin-left: 1rem;
}
.stack {
    text-align: center;
}
.stack-item {
    img {
        height: 4rem;
    }
}
</style>