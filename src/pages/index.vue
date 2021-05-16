<template>
  <div class="home-page">
    <div class="home-page__sidebar">
      <CardListHeader
        name="Hai Sam"
        img-url="https://avatars.githubusercontent.com/u/28634475?v=4"
      />
      <CardList :card-list="conversations" />
    </div>
    <div class="home-page__main">
      <MessageList class="home-page__message" :messages="messages" />
      <BasicText
        v-model="message"
        text-font-size="s"
        padding="s"
        class="home-page__text"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardListHeader from '@/components/molecules/CardListHeader.vue';
import CardList, { Card } from '@/components/molecules/CardList.vue';
import MessageList, { Message } from '@/components/molecules/MessageList.vue';
import BasicText from '@/components/atoms/BasicText.vue';

type Data = {
  message: string;
};

export default Vue.extend({
  name: 'HomePage',
  components: { CardListHeader, CardList, MessageList, BasicText },
  data(): Data {
    return {
      message: '',
    };
  },
  computed: {
    conversations(): Card[] {
      return [
        {
          name: 'Helen',
          imgUrl:
            'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/131228826_2801681920106746_1874780214052817543_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pumRcYmkOnwAX8OUDsT&_nc_ht=scontent-nrt1-1.xx&oh=7bed40b95f397aac78db56c2014ff247&oe=60C570CD',
        },
        {
          name: 'Hai Sam',
          imgUrl: 'https://avatars.githubusercontent.com/u/28634475?v=4',
        },
      ];
    },
    messages(): Message[] {
      return [
        {
          position: 'right',
          date: '2021-05-16',
          imgUrl: 'https://avatars.githubusercontent.com/u/28634475?v=4',
          text: 'This is a random message :)',
        },
        {
          position: 'left',
          date: '2021-05-16',
          imgUrl:
            'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/131228826_2801681920106746_1874780214052817543_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pumRcYmkOnwAX8OUDsT&_nc_ht=scontent-nrt1-1.xx&oh=7bed40b95f397aac78db56c2014ff247&oe=60C570CD',
          text: 'No, this is not a random message :|',
        },
        {
          position: 'right',
          date: '2021-05-16',
          imgUrl: 'https://avatars.githubusercontent.com/u/28634475?v=4',
          text: 'Okay, not a random message :))',
        },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  margin: 0 auto;
  overflow: hidden;
  border-radius: 3px;
  height: 100%;

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
    height: 160px;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  &__message {
    height: calc(100% - 160px);
    font-family: 'Micrsofot Yahei';
  }
}
</style>
