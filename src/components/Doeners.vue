<template>
  <div class="doeners">
    Doeners
    <Doener
      v-for="(doener, index) in doeners"
      :key="index"
      :doener="doener"
    />
  </div>
</template>

<script>
  import Doener from './Doener.vue';

  export default {
    name: 'Doeners',
    components: {
      Doener,
    },
    data() {
      return {
        doeners: [
          { id: 1, name: 'Doener 1', },
          { id: 2, name: 'Doener 2', },
        ]
      }
    }
  }
</script>

<style scoped>
  .doeners {

  }
</style>
