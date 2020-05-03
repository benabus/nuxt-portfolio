<template>
    <div>
        <blockquote>
            <p>
                Toilet Humor and Dick Jokes is pretty much what it says on the tin. It relays to you various stories about my own bodily functions, often dealing with toilets and/or my dick (and sometimes other parts). These comics are meant to shed some light on touchy Men's Issues in a fun and light hearted style.
            </p>

            <p>
                That's not to say these comics are family friendly. I mean... there's a lot of dicks. It's in the title. And I don't know that I'd show my mom. But my girlfriend thinks they're funny, so that's something.
            </p>
            <footer class="blockquote-footer">
                <cite>
                    <a href="https://thadj.neocities.org/preface.html"
                       target="_blank">Preface, Toilet Humor and Dick Jokes</a>
                </cite>
            </footer>
        </blockquote>
        <p>
            This series of strips was really the result of a physical need to create comics. I saw a lot of strips out there on Facebook and what not about women's problems, but I don't have those, so I figured I'd have to make mine about men's problems. Specifically, my problems. Write what you know, right? And hey, if you can't laugh at something...
        </p>
        <p>
            Starting with Episode 3, the comic are made with Clip Studio Paint (formerly Manga Studio).
        </p>
        <p>
            I wrote the website in valid HTML 3.2 just for shits and giggles. It's always a nice exercise to learn the roots of your craft. By the time I started coding websites by hand in the late 90's, HTML 4.0 was already a thing. I would have gone all the way back to HTML 2.0, but I really wanted to center things.
        </p>
        <p>
            The site is hosted on
            <a href="https://neocities.org/"
               target="_blank">Neocities</a> because it reminds of the glory days of GeoCities.
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
