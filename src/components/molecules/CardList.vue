<template>
  <div class="card-list">
    <ul>
      <li v-for="(item, index) in cardList" :key="`${item.id}_${index}`">
        <CardItem :name="item.name" :img-url="item.pictureUrl" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import CardItem from '@/components/atoms/CardItem.vue';

export default Vue.extend({
  components: { CardItem },
  props: {
    cardList: {
      type: Array,
      required: true,
    } as PropOptions<User[]>,
  },
});
</script>

<style lang="scss" scoped>
.card-list {
  li {
    padding: 12px 15px;
    border-bottom: 1px solid #292c33;
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.03);
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.1);
    }
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
  }
}
</style>
