<template>
  <textarea
    ref="textarea"
    v-model="localValue"
    class="basic-text"
    :class="{
      'basic-text--border-box': border === 'box',
      'basic-text--font-size-s': fontSize === 's',
      'basic-text--font-size-m': fontSize === 'm',
      'basic-text--font-size-l': fontSize === 'l',
      'basic-text--padding-none': padding === 'none',
      'basic-text--padding-s': padding === 's',
      'basic-text--padding-m': padding === 'm',
      'basic-text--padding-l': padding === 'l',
    }"
    v-bind="$attrs"
    @input="inputValue"
    @blur="$emit('blur')"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

const BORDERS = ['default', 'box', 'none'] as const;
type Borders = typeof BORDERS[number];

const FONT_SIZES = ['s', 'm', 'l'] as const;
type FontSizes = typeof FONT_SIZES[number];

const PADDING = ['none', 'm'];
type Padding = typeof PADDING[number];

export default Vue.extend({
  props: {
    value: {
      type: [String, Number],
      required: true,
    } as PropOptions<string | number>,
    border: {
      type: String,
      default: 'default',
      validator(value: string): value is Borders {
        return (BORDERS as readonly string[]).includes(value);
      },
    } as PropOptions<Borders>,
    fontSize: {
      type: String,
      default: 'm',
      validator(value: string): value is FontSizes {
        return (FONT_SIZES as readonly string[]).includes(value);
      },
    } as PropOptions<FontSizes>,
    padding: {
      type: String,
      default: 'm',
    } as PropOptions<Padding>,
  },
  computed: {
    localValue: {
      get(): string | number {
        return this.value;
      },
      set(value: string | number): void {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    inputValue(event: Event): void {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        const inputValue = event.target.value;
        this.$emit('input', inputValue);
      }
    },
    focus(): void {
      const { textarea } = this.$refs;
      if (textarea instanceof HTMLElement) {
        textarea.focus();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.basic-text {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 1.4;
  outline: none;
  resize: none;

  &--border-box {
    border: 1px solid $color-black20;
    border-radius: 4px;
  }

  &--font-size-s {
    font-size: $font-size-s;
  }

  &--font-size-m {
    font-size: $font-size-m;
  }

  &--font-size-l {
    font-size: $font-size-l;
  }

  &--padding-s {
    padding: 10px 15px;
  }

  &--padding-m {
    padding: 15px 20px;
  }

  &--padding-l {
    padding: 25px 20px;
  }
}
</style>
