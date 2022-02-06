<template>
  <div class="login-page">
    <div class="login-page__container">
      <header class="login-page__header">Login</header>
      <div class="login-page__form">
        <BaseButton
          :text="facebookLoginLabel"
          color="blue"
          @click="loginWithFacebook"
        />
        <BaseButton
          :text="googleLoginLabel"
          color="red"
          @click="loginWithGoogle"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ACTION_TYPES as AUTH_ACTION_TYPES } from '@/store/auth';
import BaseButton from '@/components/atoms/BaseButton.vue';

export default Vue.extend({
  name: 'Login',
  components: { BaseButton },
  computed: {
    facebookLoginLabel(): string {
      return 'Login With Facebook';
    },
    googleLoginLabel(): string {
      return 'Login With Google';
    },
  },
  methods: {
    async loginWithFacebook(): Promise<void> {
      try {
        await this.$store.dispatch(
          `auth/${AUTH_ACTION_TYPES.LOG_IN_WITH_FACEBOOK}`,
        );

        await this.$router.push({
          name: 'index',
          path: '/',
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    async loginWithGoogle(): Promise<void> {
      try {
        await this.$store.dispatch(
          `auth/${AUTH_ACTION_TYPES.LOG_IN_WITH_GOGGLE}`,
        );

        await this.$router.push({
          name: 'index',
          path: '/',
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
    text-align: center;
    padding: 20px;

    @media screen and (min-width: $breakpoint-sp) {
      width: $breakpoint-sp;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
    }
  }

  &__header {
    font-size: 36px;
  }

  &__form {
    margin-top: 100px;

    :nth-child(n + 2) {
      margin-top: 20px;
    }
  }
}
</style>
