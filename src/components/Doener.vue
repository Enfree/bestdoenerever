<template>
  <div class="doener">
    {{ doener.name }}
  </div>
</template>

<script>
  export default {
    name: 'Doener',
    props: {
      doener: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .doener {

  }
</style>
