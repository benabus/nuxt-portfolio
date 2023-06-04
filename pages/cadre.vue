<script>
export default {
    layout: 'project'
};
</script>

<template>
    <div>
        <blockquote>
            <p>
                The Collaborative Archive &amp; Data Research Environment (CADRE) addresses the IMLS “National Digital Platform” priority by addressing a critical emergent issue faced by academic libraries: providing sustainable, affordable, and standardized data and text mining services for licensed, big data sets, as well as open and non-consumptive data sets too large or unwieldy to work within existing research library environments or with no commercially viable data mining interface. ... CADRE will feature standardized data formats, data available in multiple formats including relational and graph database formats as well as flat tables and native formats, shared and custom/private computational resources, a space to share and store queries, algorithms, derived data, results of analyses, workflows, and visualizations.
            </p>
            <footer class="blockquote-footer">
                <cite>
                    <a href="https://iuni.iu.edu/projects/cadre"
                       target="_blank">The IUNI Website</a>
                </cite>
            </footer>
        </blockquote>

        <p>
            CADRE features a number of complimentary pieces. The web-based interface is hosted on AWS and uses a number of AWS services to connect the frontend with the middleware and databases.
        </p>

        <p>
            As lead software engineer, I was able to lead the IUNI IT Team to success in the design and implementation of the CADRE Gateway. The architecture and functionality was designed and developed collaboratively by the entire IUNI IT team, utilizing each of our specific areas of expertise.
        </p>

        <p>
            The frontend interface was primarily designed and developed by myself using Vue.js and Bootstrap 4. The middleware was developed collaboritively by myself and our systems developer. The interface and middleware are designed to be bundled and hosted on AWS's Elastic Beanstalk. The middleware uses AWS SQS to run asyncronous, long running database queries against massive graph databases.
        </p>

        <p>
            CADRE's "marketing" site was designed by our in-house graphic/UX designer and executed by myself. It is built hosted on an AWS EC2 instance and uses the flat-file CMS Grav.  Because Amazon limits the email sent by EC2 instances, the contact form takes advantage of AWS's SNS services.
        </p>

        <p>
            Upon becoming Director of Information Technology, I discovered that the continued support of CADRE was a liability, costing IUNI significant resources.  I successfully brokered a deal to quietly sunset the project, saving thousands of dollars in human resources, positively affecting the mental health of my entire team.
        </p>
    </div>
</template>