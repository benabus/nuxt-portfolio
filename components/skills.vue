<script>
export default {
    props: {
        level: { type: Number, default: 0 }
    },
    data() {
        return {
            skills_array: 
            [


                {
                    JavaScript: [
                        'Vue.js',
                        'Typescript'
                    ],
                    HTML: ['HTML5', 'XHTML',
                    //  'Semantic HTML5'
                    ],
                    CSS: ['Sass',
                    //  'CSS3', 
                    'Bootstrap'],
                    Python: ['Flask'],
                    PHP: [],
                    Databases: ['SQL', 'PostgreSQL'],
                    Git: ['Github', 'Github Projects'],
                    Design: [
                        'User Experience (UX)',
                        'Interfaces',
                        'Responsive Design'
                    ],
                    Middleware: ['REST APIs', 'JSON', 'AWS'],
                    'Data Visualization': ['D3', 'Sigma.js'],
                    'Agile Development': [
                        'Certified Professional Scrum Master (PSMI)',
                    ],
                    Illustration: [
                        'Graphical Storytelling (Storyboarding)',
                        'Comics',
                    ],
                    Management: ['Budgeting', 'Scheduling', 'Resource Allocation', 'Communication', 'Stakeholder Management'],
                    'Soft Skills': ['Healthy sense of humor', 'Good looking'],
                },




                {
                    Javascript: [
                        'Nuxt',
                        'AngularJS',
                        'jQuery',
                        'ES6',
                        'Promises',
                        'Closures',
                        'AJAX',
                        'React',
                    ],
                    CSS: [
                        "Tailwind"
                    ],
                    "Ruby on Rails":[],
                    Databases: [
                        "Redis",
                        "MySQL",
                        "Graph Databases",

                    ],
                
                    'Build Tools': ['Node.js', 'NPM', 'Gulp'],
                    'Agile Development': [
                        'Kanban',
                        'Jira',
                        'Slack'
                    ],
                    Troubleshooting: [
                        'A/V Setups',
                        'Teleconferencing',
                        'Zoom',
                        'Wire jiggling'
                    ],
                    
                    'Other': ['Network Science', 'Big Data (Hadoop)', "Data Collection"]
                }
            ],
            stack: {
                'Vue.js': 'vue_logo.svg',
                Python: 'python_logo.svg',
                Apache: 'apache_logo.svg',
                Postgresql: 'postgresql_logo.svg'
            }
        };
    },
    computed: {
        skills(){
            const skills = this.skills_array[this.level]
            return skills;
        }
    },
};
</script>

<template>
    <div>
        <div>
        <div class="">
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
        </div>
    </div>
    
</div>
</template>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

.two-column
{

    max-width: 100%;
    margin: auto;

    @media (min-width: map-get($grid-breakpoints, md)) {
        columns: 2;
    }
    
    @media (min-width: map-get($grid-breakpoints, lg)) {
        columns: 3;
    }
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