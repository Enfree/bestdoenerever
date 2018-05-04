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
  import axios from 'axios';

  import Doener from './Doener.vue';

  export default {
    name: 'Doeners',
    components: {
      Doener,
    },
    data() {
      return {
        doeners: [],
      }
    },
    created() {
      axios.get(`doeners`)
        .then(({ data }) => {
          this.doeners = data
        })
        .catch(e => {
          console.error(e);
        })
    }
  }
</script>

<style scoped>
  .doeners {

  }
</style>
