<template>
  <div class="search-form">
    <input class="search-form__input" type="text" :placeholder="placeHolder" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  props: {
    placeHolder: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
});
</script>

<style lang="scss" scoped>
.search-form {
  &__input {
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border: solid 1px #3a3a3a;
    border-radius: 4px;
    outline: none;
    background-color: #26292e;
  }
}
</style>
