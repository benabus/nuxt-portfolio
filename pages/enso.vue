<script>
export default {
    layout: 'project',
    head() {
        return {
            title:'Enso',
            meta: [
                { 'hid': "page-title", name:"page-title", content: 'Enso'},
                { 'hid': "page-subtitle", name:"page-subtitle", content: 'Enso Network Software'},
                { 'hid': "page-cover-image", name:"page-cover-image", content: '/assets/img/project_covers/enso.png'},
                { 'hid': "page-blurb", name:"page-blurb", content: ''},
                { 'hid': "page-cover-image-caption", name:"page-cover-image-caption", content: 'The original Enso Logo'}
            ]
        };
    }
};
</script>

<template>
    <div>

        <p>
            Project Enso is currently being developed at the
            <a href="http://iuni.iu.edu"
               target="_blank">Indiana University Network Science Institute</a>. It's purpose is provide researchers with a tool that can easily and quickly capture social network data in the field.
        </p>

        <p>
            Enso is a spiritual successor to Jesse Fagan's and Kate Eddens'
            <a href="http://www.openeddi.com/"
               target="_blank">Open Eddi</a> and is being developed by IUNI's small IT team in close collaboration with Kate.
        </p>

        <p>
            The primary difference between Enso and other survey taking software is two fold. Its focus 1) is on collecting network data, such as relatives to the interviewee and ties between the alters and 2) to make this collection easy, simple, and fun for respondents using gamification and interactive questions.
        </p>

        <hr />

        <p>
            My role in the project has primarily been architecture, design, and front-end programming. We used Quasar, which combines Vue.js and Cordova for the interface, focusing first on a web-based interface, and later, on a natively compiled mobile app. The backend primarily uses Python 3 and PostgreSQL
        </p>

    </div>
</template>