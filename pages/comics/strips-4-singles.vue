<script>
export default {
    data() {
        return {
            images: {
                atom: `Adam becomes the super hero Atom and fights against those who don't believe in science.`,
                bagel: `A bagel is sent across campus on a drone.`,
                chickenman: `We tried to beat up a chicken statue when we were kids.  It wasn't a statue.`,
                corn: `Chewbacca masks, Nokia N-Gage, Corn.`,
                dogecoin: `Dogecoin saves the world.`,
                dogecoin2: `Dogecoin mining in memes vs. real life.`,
                dogs: `Husky and Chihuahua fighting over a rope.`,
                garage: `Susan gets stuck in a doggy door after putting her clothes in the wash.`,
                mortalkombat: `Subzero vs. Scorpion + Dogecoin`,
                plane: ``,
                skinnydip: `Young couple drives down to the shore and goes skinny dipping.`,
                spiders: `Dumb answers on Family Feud.`,
                trunkhoney: `Using a bee-hive as an anti-theft device resulting in naked guy Winnie the Pooh-ing it in the back seat.`,
                xbox: `X-Box screws owner.`
            },
            nsfw: {
                skinnydip: true,
                garage: true,
                trunkhoney: true,
                xbox: true
            }
        };
    },
    methods: {
        toggleBlur(name) {
            if (this.nsfw[name] !== undefined) {
                this.nsfw[name] = !this.nsfw[name];
            }
        }
    },
    head() {
        return {
            title: 'Strips 4 Singles Gallery'
        };
    }
};
</script>

<template>
    <div>
        <h1>Strips 4 Singles Gallery</h1>
        <hr />
        <div v-for="(description, image) in images"
             :key="image"
             :class="{'nsfw': nsfw[image]}"
             class="text-center p-3 text-outline"
             @click="toggleBlur(image)">
            <img class="img-fluid rounded"
                 :src="`/assets/img/strips4singles/${image}.png`"
                 :alt="description">
            <div v-text="description"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.text-outline {
    text-shadow: $text-outline-1;
}
.nsfw {
    position: relative;
    cursor: pointer;
    img {
        filter: blur(1rem);
    }

    &::after {
        content: '[NSFW]';
        font-size: 2rem;
        padding-top: 4rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
</style>