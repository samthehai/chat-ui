<template>
  <div class="view">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
});
</script>

<style lang="scss">
.view {
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
}
</style>
