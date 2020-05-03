<script>
export default {
    layout: 'project'
};
</script>

<template>
    <div>
        <p>
            I have enjoyed comics since I was a youth, both reading and creating them. Below is a collection of comics I've created over the years, some dating back to 2004.
        </p>

        <hr />

        <h2 class="nsfw">Toilet Humor and Dick Jokes</h2>
        <div class="subtitle"><a href="https://thadj.neocities.org/"
               target="_blank">https://thadj.neocities.org/</a></div>
        <p>
            I saw a lot of strips out there on Facebook and what not about women's problems, but I don't have those, so I figured I'd have to make mine about men's problems. Specifically, my problems. Write what you know, right? And hey, if you can't laugh at something...
        </p>
        <p>
            Starting with Episode 3, the comics are made with Clip Studio Paint (formerly Manga Studio).
        </p>
        <p>
            I wrote the website in valid HTML 3.2 just for shits and giggles. It's always a nice exercise to learn the roots of your craft. By the time I started coding websites by hand in the late 90's, HTML 4.0 was already a thing. I would have gone all the way back to HTML 2.0, but I really wanted to center things.
        </p>
        <p>
            The site is hosted on <a href="https://neocities.org/"
               target="_blank">Neocities</a> because it reminds of the glory days of GeoCities.
        </p>

        <hr />

        <h2>Strips 4 Singles</h2>
        <div class="subtitle">
            <nuxt-link to="/comics/strips-4-singles">View the Gallery</nuxt-link>
        </div>
        <div class="card float-md-left mb-3 mr-md-3 col-12 col-md-4">
            <img class="card-img-top"
                 src="/assets/img/project_covers/small.png"
                 alt="Panel of a Strips 4 Singles Comic" />
            <div class="figure-caption text-center card-body">Panel of a Strips 4 Singles Comic</div>
        </div>
        <p>
            I like drawing, but never really have a reason or the drive, so I devised Strips 4 Singles as a way to solve both problems. People submit things for me to draw, pay $1 per panel, and since they pay for them, I’m obligated to create. Obviously, with at most $9 per project, it’s not very sustainable financially, but the intention was not to make money off of it.
        </p>
        <p>
            The website was originally built with Ruby on Rails, but is now defunct. A collection of some of my favorite Strips can be found <nuxt-link to="/comics/strips-4-singles">here</nuxt-link>.
        </p>
        <div class="clearfix"></div>
        <hr />

        <h2>24 Hour Comic Day 2014</h2>

        <div class="subtitle">
            <nuxt-link to="/comics/24-hour-comic-day">View the Comic</nuxt-link>
        </div>
        <p>
            24 Hour Comic Day is a yearly event on the first Saturday of October, where cartoonists from all over the world create comics from start to finish in 24 consecutive hours. I participated in 2014 and almost succeeded in creating a 24 page comic in just under 24 hours. I got a migraine about 20 hours in and had to give up.  I finished the next day.
        </p>

        <hr />

        <h2 class="nsfw">Poonheads</h2>

        <div class="subtitle">
            <a href="http://poonheads.com"
               target="_blank">http://poonheads.com</a>
        </div>
        <p>
            My first foray into web comics was the story 3 friends and their numerous, truly bizarre misadventures.
        </p>

        <div class="card float-md-right mb-3 ml-md-3 col-12 col-md-4">
            <img class="card-img-top"
                 src="/assets/img/project_covers/poonheadsComic.png"
                 alt="Screenshot of Poonheads.com" />
            <div class="figure-caption text-center card-body">Screenshot of Poonheads.com</div>
        </div>

        <p>
            The year was 2004. I was a care free college student only a year out of high school. Still living at home, getting into mischief high school friends, and spending a lot of time online. After discovering that web comics could allow any old Joe to be a successful comic artist, I wrote a few strips based on adventures with my friends, built a rudimentary web page and threw them online.
        </p>

        <p>
            For a little more than a year (60 strips in total), I updated the website weekly with new comics. By web comic standards of the time, this was an eternity. I worked just as hard on this side project as I did my course work (perhaps even more so). Eventually, school caught up to me and I burned out. While I did periodically create a stand alone strip here and there, Poonheads would essentially be no more.
        </p>

        <p>
            Years later, my web hosting was canceled and Poonheads had effectively disappeared from the web. Since I needed to put the comics somewhere, and tumblr was the new hotness at the time, I started and account uploaded all the old content there. I created a custom theme based on the design of the original website and forwarded the domain. The archive, in addition to a bunch of extra content including sketches, flyers, and a new comic I created for the 10th anniversary, can be found <a href="https://poonheads.com"
               target="_blank">there</a>.
        </p>

    </div>
</template>

<style lang="scss" scoped>
.subtitle {
    padding-bottom: 1rem;
}
.nsfw {
    &::after {
        margin-left: 1rem;
        display: inline-block;
        content: '[NSFW]';
        font-size: 1rem;
        vertical-align: middle;
    }
}
</style>