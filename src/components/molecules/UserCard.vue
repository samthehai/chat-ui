<template>
  <div class="user-card">
    <header>
      <!-- TODO -->
      <img
        class="user-card__avatar"
        width="40"
        height="40"
        alt="avatar"
        src=""
      />
      <p class="user-card__name">User Name</p>
    </header>
    <footer>
      <input
        class="user-card__search"
        type="text"
        placeholder="search user..."
      />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.user-card {
  padding: 12px;
  border-bottom: solid 1px #24272c;

  &__footer {
    margin-top: 10px;
  }

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

  &__search {
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
