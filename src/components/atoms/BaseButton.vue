<template>
  <button
    class="base-button"
    :class="{
      'base-button--black': color === 'black',
      'base-button--blue': color === 'blue',
      'base-button--green': color === 'green',
      'base-button--red': color === 'red',
      'base-button--white': color === 'white',
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span
      class="base-button__text button-text"
      :class="{
        'button-text--s': fontSize === 's',
        'button-text--m': fontSize === 'm',
        'button-text--l': fontSize === 'l',
        'button-text--normal': fontWeight === 'normal',
        'button-text--bold': fontWeight === 'bold',
      }"
    >
      {{ text }}
    </span>
  </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

const COLORS = ['black', 'blue', 'green', 'red', 'white'] as const;
type Colors = typeof COLORS[number];

const FONT_SIZES = ['s', 'm', 'l'] as const;
type FontSizes = typeof FONT_SIZES[number];

const FONT_WEIGHTS = ['normal', 'bold'] as const;
type FontWeights = typeof FONT_WEIGHTS[number];

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    } as PropOptions<string>,
    disabled: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
    color: {
      type: String,
      default: 'black',
      validator(value: string): value is Colors {
        return (COLORS as readonly string[]).includes(value);
      },
    } as PropOptions<Colors>,
    fontSize: {
      type: String,
      default: 'm',
      validator(value: string): value is FontSizes {
        return (FONT_SIZES as readonly string[]).includes(value);
      },
    } as PropOptions<FontSizes>,
    fontWeight: {
      type: String,
      default: 'normal',
      validator(value: string): value is FontWeights {
        return (FONT_WEIGHTS as readonly string[]).includes(value);
      },
    } as PropOptions<FontWeights>,
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  color: $color-white;
  background-color: $color-graylight40;
  border-radius: 10px;
  box-shadow: inset 0 -4px 0 0 $color-black10;
  cursor: pointer;

  &:disabled {
    background-color: $color-graylight30;
    cursor: default;
  }

  &--black {
    color: $color-black;
  }

  &--blue {
    background-color: $color-blue;
  }

  &--green {
    background-color: $color-green;
  }

  &--red {
    background-color: $color-red;
  }

  &--white {
    color: $color-black;
    background-color: $color-white;
    border: solid 1px $color-graylight20;
  }

  &__text {
    flex-grow: 1;
  }
}

.button-text {
  &--s {
    font-size: $font-size-s;
  }

  &--m {
    font-size: $font-size-m;
  }

  &--l {
    font-size: $font-size-l;
  }

  &--normal {
    font-weight: normal;
  }

  &--bold {
    font-weight: bold;
  }
}
</style>
