<template>
<nav>
    <HeaderView />
</nav>

<router-view />

<teleport to="#root_footer">
    <FooterViewVue />
</teleport>
</template>

<script>
import FooterViewVue from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue"
export default {
    components: {
        HeaderView,
        FooterViewVue
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f8f9fa;
}

nav a {
    font-weight: 500;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
