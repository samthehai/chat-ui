<template>
  <div class="login">
    <div class="login__button" @click="login">Login With Facebook</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ACTION_TYPES as LOGIN_ACTION_TYPES } from '@/store/login';

export default Vue.extend({
  name: 'Login',
  methods: {
    async login(): Promise<void> {
      try {
        await this.$store.dispatch(
          `login/${LOGIN_ACTION_TYPES.SIGN_IN_WITH_FACEBOOK}`,
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  &__button {
    text-align: center;
    background-color: #3b5998;
    border: 1px solid gray;
    cursor: pointer;
  }
}
</style>
