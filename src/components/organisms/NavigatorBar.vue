<template>
  <div class="navigator-bar">
    <div class="navigator-bar__left"></div>
    <div class="navigator-bar__right">
      <div v-if="isLoggedIn" @click="logout">Logout</div>
      <div v-else @click="login">Login</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  GETTER_TYPES as LOGIN_GETTER_TYPES,
  ACTION_TYPES as LOGIN_ACTION_TYPES,
} from '@/store/login';

export default Vue.extend({
  computed: {
    isLoggedIn(): boolean {
      return this.$store.getters[`login/${LOGIN_GETTER_TYPES.IS_LOGGED_IN}`];
    },
  },
  methods: {
    async login(): Promise<void> {
      // TODO: modal
      try {
        await this.$store.dispatch(
          `login/${LOGIN_ACTION_TYPES.SIGN_IN_WITH_FACEBOOK}`,
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    async logout(): Promise<void> {
      // TODO: modal
      try {
        await this.$store.dispatch(`login/${LOGIN_ACTION_TYPES.LOGOUT}`);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.navigator-bar {
  $right-section-width: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  padding: 10px 0;
  border: solid 2px gray;
  border-left-width: 0;
  border-right-width: 0;
  font-family: monospace;
  font-size: 1.5rem;
  box-shadow: inset -1px 1px 7px rgba(0, 0, 0, 0.2),
    inset 1px -1px 1px rgba(0, 0, 0, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.4),
    1px 1px 1px rgba(0, 0, 0, 0.4), 1px 1px 1px rgba(0, 0, 0, 0.2),
    -1px 1px 1px rgba(0, 0, 0, 0.1);

  &__left {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    width: calc(100% - #{$right-section-width});

    div {
      &:nth-child(n + 2) {
        padding-left: 5px;
      }

      color: black;
    }

    a {
      width: 100%;
      font-weight: bold;
      border: solid 1px gray;
      border-radius: 10px;
      text-decoration: none;
      padding: 0 10px;
      color: black;
      background-color: white;
      &.nuxt-link-exact-active {
        color: white;
        background: rgb(208, 207, 226);
        background: linear-gradient(
          90deg,
          rgb(208, 207, 226) 0%,
          rgba(171, 198, 193, 1) 35%,
          rgba(0, 212, 255, 1) 100%
        );
      }

      cursor: pointer;
      line-height: 1.5;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__right {
    width: $right-section-width;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
