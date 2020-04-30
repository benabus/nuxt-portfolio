<script>
import axios from 'axios';
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
    methods: {
        sendMail() {
            axios({
                url:
                    'https://drefcjl0vc.execute-api.us-east-1.amazonaws.com/production/sendEmailBS',
                method: 'POST',
                data: {
                    name: this.name,
                    email: this.email,
                    description: this.message
                },
                headers: {
                    'x-api-key': 'RRf2ukTmZ36EtGwcATTTc4hdZBvRqcPw3DCyo90K'
                }
            }).then(
                () => {
                    console.log('Success');
                },
                () => {
                    console.log('Failure');
                }
            );
        }
    }
};
</script>


<template>
    <div>
        <figure class="float-right text-center col-5 col-sm-5 col-md-4 col-lg-3 p-0 pl-4 mb-0">
            <img class="figure-img img-fluid rounded m-0"
                 :src="'/assets/img/tie.jpg'" />
        </figure>
        <p>
            As a front-end mid stack web developer, I do it all. I'm just better at front-ends and middleware. Interfaces and APIs with a sprinkle of database and system administration as necessary.
        </p>
        <p>
            Web development has been in my blood since the late 1990's (Geocities, anyone?) and I've been coding professionally since 2005. On the side, I occasionally make comics and illustrations. My design skills aren't too bad, but I do fancy Comic Sans because it’s fun and pretentious artsy designer types hate it.
        </p>
        <p>
            I have a BS in Business Administration with a major in Management of Information Systems and an MS in Human Computer Interaction design. I'm also a certified Professional Scrum Master (PSM-I) and an ordained minister, which is great if you want to get married and then plan your first sprint at the reception.
        </p>
        <figure class="float-left text-center col-sm-5 col-md-4 col-lg-4 p-0 pt-sm-2 pr-sm-4 mb-sm-0 pb-2">
            <img class="figure-img img-fluid rounded m-0"
                 :src="'/assets/img/truck.jpg'" />
        </figure>

        <p>
            In my downtime, among other things, I like playing video games, watching TV, and reading comics (mostly just X-Men). I'm also fond of LEGO because unlike my chosen profession, I can build a physical object with clear instructions and pieces provided to me in a box.
        </p>

        <p>
            I'm convinced that everyone is just stumbling through this life doing the best they can with what they have. No one really knows what they're doing or what's going on and anyone who says otherwise is a liar or a fool.
        </p>
        <p>
            You may reach me directly via email at
            <email />
            or on <a href="https://www.linkedin.com/in/benserrette"
               target="_blank">Linked In</a>.
        </p>

        <div class="clearfix"></div>

        <!-- <form class="form"
                  @submit.prevent.stop="sendMail"
                  method="post"
                  id="cntctfrm_contact_form"
                  action="http://thestumblingponcho.com/about/#cntctfrm_contact_form"
                  enctype="multipart/form-data">
                <div class="form-group">
                    <label for="cntctfrm_contact_name">
                        Name</label>
                    <input class="form-control"
                           type="text"
                           name="cntctfrm_contact_name"
                           v-model="name"
                           id="cntctfrm_contact_name" />

                </div>
                <div class="form-group">
                    <label for="cntctfrm_contact_email">
                        Email</label>
                    <input class="form-control"
                           type="text"
                           name="cntctfrm_contact_email"
                           v-model="email"
                           id="cntctfrm_contact_email" />

                </div>
                <! <div class="form-group">
                <label for="cntctfrm_contact_subject">
                Subject</label>
                <input class="form-control"
                    type="text"
                    name="cntctfrm_contact_subject"
                    id="cntctfrm_contact_subject" />

            </div> -->

        <!-- <div class="form-group">
                    <label for="cntctfrm_contact_message">
                        Message</label>
                    <textarea class="form-control"
                              rows="5"
                              cols="30"
                              name="cntctfrm_contact_message"
                              v-model="message"
                              id="cntctfrm_contact_message"></textarea>

                </div>
                <input type="hidden"
                       value="send"
                       name="cntctfrm_contact_action"><input type="hidden"
                       value="Version: 3.30" />
                <input type="hidden"
                       value="en"
                       name="cntctfrm_language">
                <button class="btn btn-primary">Submit</button>

            </form> -->
    </div>
</template>
