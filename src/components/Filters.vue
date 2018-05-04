<template>
  <div class="filters">
    Filters
    <Rating
      :max="5"
    />
  </div>
</template>

<script>
  import Rating from './Rating.vue';

  export default {
    name: 'Filters',
    props: {

    },
    components: {
      Rating,
    },
  }
</script>

<style scoped>
  .filters {

  }
</style>
