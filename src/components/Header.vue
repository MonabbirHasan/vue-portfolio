<template>
    <header>
        <div class="container">
            <div class="nav-me">
                <NavigationVue />
            </div>
        </div>
    </header>
</template>

<script>
import NavigationVue from './Navigation.vue';
export default {
    name: 'Header-h',
    components: {
        NavigationVue
    }
}
</script>

<style>
body {
    font-family: 'Lobster Two', cursive;
    font-family: 'Roboto Mono', monospace;
scroll-behavior: smooth;
}
html{
    scroll-behavior: smooth;
    transition: .5s;
}

header {
    width: 100%;
    background: #eee;
    vertical-align: middle;
    position: fixed;
    z-index: 100;
}

.nav-menu {
    display: flex;
}
</style>