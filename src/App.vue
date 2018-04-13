<template>
  <div id="app">
    <Header/>
    <Filters/>
    <Doeners/>
    <Footer/>
  </div>
</template>

<script>
  import Doeners from './components/Doeners.vue';
  import Filters from './components/Filters.vue';
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      Doeners,
      Filters,
      Footer,
      Header,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>
