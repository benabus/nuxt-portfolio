<script>
import Poncho from '@/components/poncho';

export default {
    components: {
        Poncho
    },
    data() {
        return {
            menu_open: false,
            show_menu: false
        };
    },
    methods: {
        toggleMenu() {
            this.show_menu = !this.show_menu;
        },
        closeMenu() {
            this.show_menu = false;
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container d-flex align-items-end justify-content-between">
            <nuxt-link class="navbar-brand"
               to="/">
                <div class="d-flex">
                    <div class="navbar-poncho">
                        <poncho />
                    </div>
                    <div>
                        <span>Ben</span>
                        <span>Serrette</span>
                    </div>
                </div>
            </nuxt-link>
            <button class="navbar-toggler toggle-button"
                    type="button"
                    aria-controls="navbarContent"
                    aria-label="Toggle navigation"
                    @click="toggleMenu()">
                <fa :icon="['fas', 'bars']" />
            </button>
            <div class="navbar-collapse collapse justify-content-end"
                 :class="{'show': show_menu}">
                <ul class="navbar-nav">
                    <li class="nav-item"
                        @click="closeMenu()">
                        <nuxt-link class="nav-link"
                           to="/#about">About</nuxt-link>
                    </li>
                    <li class="nav-item"
                        @click="closeMenu()">
                        <nuxt-link class="nav-link"
                           to="/#skills">Skills</nuxt-link>
                    </li>
                    <li class="nav-item"
                        @click="closeMenu()">
                        <nuxt-link class="nav-link"
                           to="/#projects">Development</nuxt-link>
                    </li>
                    <li class="nav-item"
                        @click="closeMenu()">
                        <nuxt-link class="nav-link"
                           to="/#illustration">Illustration</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

nav {
    box-shadow: $bottom-shadow;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    background: $purple;
    text-shadow: $text-outline-1;
}
.navbar-brand {
    overflow: hidden;
}
.toggle-button {
    color: $yellow;
    font-size: 2rem;
}
.navbar-poncho {
    svg {
        height: 4rem;
    }
    height: 2rem;
    overflow: hidden;
    fill: $yellow;
    stroke: black;
    stroke-width: 3px;
    margin-right: 1rem;
}
footer {
    overflow: hidden;
    padding-top: 1rem;
    & > div {
        padding-top: 1rem;
        padding-bottom: 1rem;
        box-shadow: $top-shadow;
    }
}
</style>