<template>
  <div class="home-page">
    <div class="home-page__sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="home-page__main">
      <message></message>
      <text></text>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'HomePage',
});
</script>

<style lang="scss" scoped>
.home-page {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;

  &__sidebar {
    height: 100%;
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }

  &__main {
    height: 100%;
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }

  &__text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  &__message {
    height: calc(100% - 160px);
  }
}
</style>
