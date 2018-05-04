<template>
  <div class="rating">
    <h2>Star Rating</h2>
    <span
      v-for="(elem, index) in checkedArray"
      class="fa fa-star"
      :class="{ 'checked': isStarChecked(index)}"
      @click="setRating(index)"
    ></span>
  </div>
</template>

<script>
  import { fill } from 'lodash';

  export default {
    name: 'Rating',
    props: {
      checked: {
        type: Number,
        default: 3,
      },
      max: {
        type: Number,
        default: 5,
      }
    },
    data() {
      return {
        checkedAmount: this.checked,
        checkedArray: fill(Array(this.max), 1),
      };
    },
    methods: {
      setRating(index) {
        this.checkedAmount = index;
      },
      isStarChecked(index) {
        return this.checkedAmount >= index;
      }
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  .checked {
    color: orange;
  }
</style>
