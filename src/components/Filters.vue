<template>
  <div class="filters">
    Filters
    <rating></rating>
  </div>
</template>

<script>
  import rating from './Rating.vue';

  export default {
    name: 'Filters',
    props: {

    },
    components: {
      rating,
    },
  }
</script>

<style scoped>
  .filters {

  }
</style>
