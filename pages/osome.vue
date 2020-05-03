<script>
export default {
    layout: 'project'
};
</script>

<template>
    <div>
        <blockquote class="blockquote">
            <h2>What is the Observatory on Social Media?</h2>
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
            OSoMe was originally created as a sophisticated data collection and storage system to archive the 10% stream of Twitter data. Over time, OSoMe expanded into a set of tools on top of this database and additional tools used to combat misinformation rampant on Twitter.
            </p>

        <p>My inital contribution to OSoMe was the <a href="http://osome.iuni.iu.edu/tools/networks/"
               target="_blank">Diffusion Network Graph</a>. The interface was created using Angular 1.x and Zurb Foundation. The middleware uses Python 3 and NetworkX. It also uses Redis for caching and connects to the database using Celery.</p>

        <p>
            As OSoMe's mission and scope increased, so did my contribution and position within the team. I lead the development of the <nuxt-link to="/hoaxy">Hoaxy</nuxt-link> frontend, mentored junior developers, and oversaw the development of the BotSlayer interface. As the composition of the team changed, my role became more hands on in the development of the tool interfaces while still leading the team and contributing to overall software design and architecture of the system as a whole.
        </p>

    </div>
</template>