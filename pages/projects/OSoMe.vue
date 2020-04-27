<template>
    <div>
        <blockquote class="">
            <h3 class="h4">What is the Observatory on Social Media?</h3>
            <p>
                The Observatory on Social Media is a set of tools resulting from a broad research project that seeks to study how memes spread online. Our first application was the study of astroturfing: memes promoted by social bots to create the appearance of a grassroots movement. Our first demo to visualize the spread of memes on Twitter was nicknamed Truthy. The word, suggested by a graduate student, comes from a term popularized by Stephen Colbert, truthiness, which describes claims that feel like they ought to be true, but aren't necessarily.
            </p>
            <footer class="blockquote-footer">
                <cite>
                    <a href="http://osome.iuni.iu.edu/faq/#whatistruthy"
                       target="_blank">The OSoMe Website</a>
                </cite>
            </footer>
        </blockquote>

        <p>
            The backend of OSoMe utilizes a sophisticated query tool on top of a custom HBase database.  I had nothing to do with any of that.
        </p>

        <p>
            My primary contribution to OSoMe has been the <a href="http://osome.iuni.iu.edu/tools/networks/" target="_blank">Diffusion Network Graph</a>.  The interface was created using Angular 1.x and Zurb Foundation.  The middleware uses Python 3 and NetworkX.  It also uses Redis for caching and connects to the database using Celery.
        </p>
    </div>
</template>
<script>
export default {};
</script>
