<template>
  <div class="message-item">
    <p class="message-item__date">
      <span>{{ date }}</span>
    </p>
    <div
      class="message-item__main"
      :class="{ 'message-item--right': position === 'right' }"
    >
      <img class="message-item__avatar" width="30" height="30" :src="imgUrl" />
      <div class="message-item__text">{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

const POSITIONS = ['left', 'right'] as const;
export type Positions = typeof POSITIONS[number];

export default Vue.extend({
  props: {
    position: {
      type: String,
      required: true,
      validator(value: string): value is Positions {
        return (POSITIONS as readonly string[]).includes(value);
      },
    } as PropOptions<string>,
    date: {
      type: String,
      required: true,
    } as PropOptions<string>,
    imgUrl: {
      type: String,
      required: true,
    } as PropOptions<string>,
    text: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
});
</script>

<style lang="scss" scoped>
.message-item {
  $root: '&';

  &__date {
    margin: 7px 0;
    text-align: center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }

  &__avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }

  &__text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: calc(100% - 40px);
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    &:before {
      content: ' ';
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }

  &--right {
    text-align: right;

    #{$root}__avatar {
      float: right;
      margin: 0 0 0 10px;
    }

    #{$root}__text {
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>
