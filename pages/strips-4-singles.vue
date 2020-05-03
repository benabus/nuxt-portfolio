<template>
    <div>

        <p>
            I like drawing, but never really have a reason or the drive, so I devised Strips 4 Singles as a way to solve both problems. People submit things for me to draw, and since they pay for them, I’m obligated to create.
        </p>
        <p>
            Obviously, with at most $9 per project, it’s not very sustainable financially, but the intention was not to make money off of it.
        </p>
        <p>
            The website is full CSS3 and semantic HTML5. I’m pretty proud of the Dollar Bill banner as it uses no pictures, only solid CSS. The ordering system is built with Ruby on Rails.
        </p>
        <p>
            A gallery of some of the strips can be found here: http://www.strips4singles.com/gallery
        </p>
    </div>
</template>
<script>
export default {
    fetch({ params, redirect }) {
        redirect(301, `/comics`);
    }
};
</script>
