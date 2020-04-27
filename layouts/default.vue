<script>
import Poncho from '@/components/poncho';
const now = new Date();
export default {
    components: {
        Poncho
    },
    data() {
        return {
            menu_open: false,
            year: now.getFullYear(),
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
};
</script>


<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container d-flex align-items-end justify-content-between">
                <a class="navbar-brand"
                   href="#">
                    <div class="d-flex">
                        <div class="navbar-poncho">
                            <poncho />
                        </div>
                        <div>
                            <span>Ben</span>
                            <span>Serrette</span>
                        </div>
                    </div>
                </a>
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
                            <a class="nav-link"
                               href="/#about">About</a>
                        </li>
                        <li class="nav-item"
                            @click="closeMenu()">
                            <a class="nav-link"
                               href="/#skills">Skills</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="container">
            <nuxt />
        </main>

        <footer>
            <div>
                <div class="container">
                    &copy; <span v-text="year">2020</span> Ben Serrette
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
$top-shadow: 0 -1px 5px 0px rgba(0, 0, 0, 0.25);
$bottom-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.25);

main {
    margin-top: $top-margin;
}
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
.toggle-button
{
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