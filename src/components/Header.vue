<template>
  <div class="header">
    <img
      src="./../assets/images/img-header.jpg"
      class="header__img"
      alt=""
    />
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {}
  }
</script>

<style
  lang="scss"
  scoped
>
  .header {
    &__img {
      width: 100%;
    }
  }
</style>