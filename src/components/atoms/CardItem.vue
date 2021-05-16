<template>
  <div class="card-item">
    <img
      class="card-item__avatar"
      width="40"
      height="40"
      :alt="name"
      :src="imgUrl"
    />
    <p class="card-item__name">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    } as PropOptions<string>,
    imgUrl: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
});
</script>

<style lang="scss" scoped>
.card-item {
  &__avatar,
  &__name {
    vertical-align: middle;
  }

  &__avatar {
    border-radius: 2px;
  }

  &__name {
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 16px;
  }
}
</style>
