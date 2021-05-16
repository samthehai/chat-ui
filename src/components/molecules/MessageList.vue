<template>
  <div class="message-list">
    <ul>
      <li v-for="(item, index) in messages" :key="index">
        <MessageItem
          :position="item.position"
          :date="item.date"
          :img-url="item.imgUrl"
          :text="item.text"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import MessageItem from '@/components/atoms/MessageItem.vue';

// TODO
export type Message = {
  position: string;
  date: string;
  imgUrl: string;
  text: string;
};

export default Vue.extend({
  components: { MessageItem },
  props: {
    messages: {
      type: Array,
      required: true,
    } as PropOptions<Message[]>,
  },
});
</script>

<style lang="scss" scoped>
.message-list {
  padding: 10px 15px;
  overflow-y: scroll;

  li {
    :nth-child(n + 2) {
      margin-top: 15px;
    }
  }
}
</style>
