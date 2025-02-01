<script>
// import axios from 'axios';
import Email from '@/components/email.vue';
export default {
    components: {
        Email
    },
    data() {
        return {
            name: '',
            message: '',
            email: ''
        };
    },
    mounted() {},
    // methods: {
    //     sendMail() {
    //         axios({
    //             url:
    //                 'https://drefcjl0vc.execute-api.us-east-1.amazonaws.com/production/sendEmailBS',
    //             method: 'POST',
    //             data: {
    //                 name: this.name,
    //                 email: this.email,
    //                 description: this.message
    //             },
    //             headers: {
    //                 'x-api-key': 'RRf2ukTmZ36EtGwcATTTc4hdZBvRqcPw3DCyo90K'
    //             }
    //         }).then(
    //             () => {
    //                 console.log('Success');
    //             },
    //             () => {
    //                 console.log('Failure');
    //             }
    //         );
    //     }
    // }
};
</script>


<template>
    <div >
        <figure class="float-right text-center col-5 col-sm-5 col-md-4 col-lg-3 p-0 pl-4 mb-0">
            <img class="figure-img img-fluid rounded m-0"
                 :src="'/assets/img/tie.jpg'" />
        </figure>

        <p>I'm an <strong>engineering leader, mentor, and maker</strong> with over 15 years of experience in software development. As the <strong>IT Director of the Observatory on Social Media (OSoMe)</strong>, I help drive cutting-edge research into misinformation, social bots, and the mechanics of online influence. My team builds innovative tools that empower researchers, journalists, and policymakers to better understand and combat the spread of disinformation.</p>

        <p>My leadership philosophy is rooted in <strong>servant-leadership</strong>&mdash;my job is to <strong>equip my team with everything they need to succeed</strong>. If they fail, I see that as my failure. I hire great developers and mentor them into exceptional ones, fostering a culture of <strong>collaboration, creativity, and continuous improvement</strong>. I believe in building software that is not just functional, but also meaningful and intuitive, ensuring that technology serves people effectively. My approach balances <strong>technical excellence with strategic vision</strong>, always keeping long-term sustainability and usability in mind.</p>

        <figure class="float-left text-center col-sm-5 col-md-4 col-lg-4 p-0 pt-sm-2 pr-sm-4 mb-sm-0 pb-2">
            <img class="figure-img img-fluid rounded m-0"
                 :src="'/assets/img/truck.jpg'" />
        </figure>

        
        <p>I prioritize <strong>trust, respect, and autonomy</strong>, allowing my team the freedom to explore solutions while providing guidance and support when needed. We operate on a <strong>fail-fast, learn-faster</strong> mentality&mdash;experimentation and iteration drive us forward. I'm deeply committed to fostering an environment where innovation thrives and where my team feels empowered to push boundaries.</p>

        <p>Outside of work, I spend my time <strong>immersed in music, tabletop RPGs, and LEGO</strong>&mdash;because even when I'm not leading teams, I'm still making things.</p>

        
        <p>You may reach me directly via email at
            <email />
            or on <a href="https://www.linkedin.com/in/benserrette"
               target="_blank">Linked In</a>.
        </p>

        <div class="clearfix"></div>

    </div>
</template>
