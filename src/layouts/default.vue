<template>
  <div class="view">
    <div class="view__nav nav">
      <NavigatorBar />
    </div>
    <div class="view__content">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigatorBar from '@/components/organisms/NavigatorBar.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    NavigatorBar,
  },
});
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.view {
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
  box-shadow: inset -1px 1px 7px rgba(0, 0, 0, 0.2),
    inset 1px -1px 1px rgba(0, 0, 0, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.4),
    1px 1px 1px rgba(0, 0, 0, 0.4), 1px 1px 1px rgba(0, 0, 0, 0.2),
    -1px 1px 1px rgba(0, 0, 0, 0.1);

  &__content {
    // max-width: 600px;
    margin: 20px auto 0;
    height: 100%;

    @media screen and (max-width: 600px) {
      margin-left: 10vw;
      margin-right: 10vw;
    }
  }
}
</style>
