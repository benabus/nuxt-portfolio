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
                The Observatory on Social Media (OSoMe, pronounced awe•some) is a joint project of the Center for Complex Networks and Systems Research (CNetS) at the Luddy School, the Media School, and the Network Science Institute (IUNI) at Indiana University. OSoMe unites data scientists and journalists in studying the role of media and technology in society, and building tools to analyze and counter disinformation and manipulation on social media.
            </p>
            <footer class="blockquote-footer">
                <cite>
                    <a href="http://osome.iuni.iu.edu"
                       target="_blank">The OSoMe Website</a>
                </cite>
            </footer>
        </blockquote>

        
        <p>
            OSoMe was originally created as a sophisticated data collection and storage system to archive the 10% stream of Twitter with the intent of analyzing the data to study bots and misinformation. Over time, OSoMe expanded into a set of tools on top of this database and additional tools used to combat the rampant misinformation on Twitter.
        </p>

        <h2>Development</h2>

        <p>My inital contribution to OSoMe was the <a href="http://osome.iuni.iu.edu/tools/networks/"
               target="_blank">Diffusion Network Graph</a>. The interface was created using Angular 1.x and Zurb Foundation. The middleware uses Python 3 and NetworkX. It also uses Redis for caching and connects to the database using Celery.</p>

        <p>
            As OSoMe's mission and scope increased, so did my contribution and position within the team. I led the development of the <nuxt-link to="/hoaxy">Hoaxy</nuxt-link> frontend, mentored junior developers, and oversaw the development of the BotSlayer interface. As the composition of the team changed, my role became more hands on in the development of the tool interfaces while still leading the team and contributing to overall software design and architecture of the system as a whole.
        </p>

        <p>As IT Director, I continue to oversee the development and maintenance of the suite of OSoMe tools by allocating resources and building timelines. I also participate in key strategic discussions regarding the future of OSoMe's IT needs.</p>

    </div>
</template>