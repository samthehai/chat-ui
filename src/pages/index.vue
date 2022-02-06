<template>
  <div class="home-page">
    <div class="home-page__sidebar">
      <CardListHeader
        :name="me ? me.name : ''"
        :img-url="me ? me.pictureUrl : ''"
        @click-icon="clickIcon"
      />
      <CardList :card-list="friends" />
    </div>
    <div class="home-page__main">
      <MessageList class="home-page__message" :messages="messages" />
      <BaseText
        v-model="message"
        font-size="s"
        padding="s"
        class="home-page__text"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardListHeader from '@/components/molecules/CardListHeader.vue';
import CardList from '@/components/molecules/CardList.vue';
import MessageList, { Message } from '@/components/molecules/MessageList.vue';
import BaseText from '@/components/atoms/BaseText.vue';
import {
  ACTION_TYPES as USER_ACTION_TYPES,
  GETTER_TYPES as USER_GETTER_TYPES,
} from '@/store/user';
import { ACTION_TYPES as AUTH_ACTION_TYPES } from '@/store/auth';
// import friendsQuery from '@/api/graphql/queries/friends.gql';
// import postMessageMutation from '@/api/graphql/mutations/postMessage.gql';
// import userJoinedSubscription from '@/api/graphql/subscriptions/userJoined.gql';
import messagePostedSubscription from '@/api/graphql/subscriptions/messagePosted.gql';

// const friendsPageSize = 10;
const friendInitialCursor: Scalars['ID'] = '0';

type Data = {
  friends: User[];
  messages: Message[];
  message: string;
  friendsCursor: Scalars['ID'];
};

export default Vue.extend({
  name: 'HomePage',
  components: { CardListHeader, CardList, MessageList, BaseText },
  async asyncData(ctx): Promise<void> {
    await ctx.store.dispatch(`user/${USER_ACTION_TYPES.GET_ME}`, ctx);
  },
  data(): Data {
    return {
      friends: [],
      messages: [],
      message: '',
      friendsCursor: friendInitialCursor,
    };
  },
  computed: {
    me(): User {
      return this.$store.getters[`user/${USER_GETTER_TYPES.ME}`];
    },
  },
  apollo: {
    // friends: {
    //   query: friendsQuery,
    //   // Initial variables
    //   variables: {
    //     first: friendsPageSize,
    //     after: friendInitialCursor,
    //     sortOrder: 'SORT_ORDER_ASC',
    //     sortBy: 'FRIENDS_SORT_BY_NAME',
    //   },
    //   methods: {
    //     showMore() {
    //       // Fetch more data and transform the original result
    //       this.$apollo.queries.friendsPage.fetchMore({
    //         // New variables
    //         variables: {
    //           first: friendsPageSize,
    //           after: this.friendsCursor,
    //           sortOrder: 'SORT_ORDER_ASC',
    //           sortBy: 'FRIENDS_SORT_BY_NAME',
    //         },
    //         // Transform the previous result with new data
    //         updateQuery: (previousResult, { fetchMoreResult }) => {
    //           const newFriends: User[] = fetchMoreResult.friends.edges.map(
    //             (edge: UserFriendsEdge) => edge.node,
    //           );
    //           const pageInfo: PageInfo = fetchMoreResult.friends.pageInfo;
    //           this.friendsCursor = pageInfo.endCursor;

    //           return {
    //             friends: {
    //               __typename: previousResult.friends.__typename,
    //               // Merging the friend list
    //               friends: [...previousResult.friends.friends, ...newFriends],
    //             },
    //           };
    //         },
    //       });
    //     },
    //   },
    //   update({ friends }) {
    //     this.friendsCursor = friends.pageInfo.endCursor;
    //     const friendsList = friends.edges.map(
    //       (edge: UserFriendsEdge) => edge.node,
    //     );

    //     return friendsList;
    //   },
    //   // subscribeToMore: {
    //   //   document: userJoinedSubscription,
    //   //   variables() {
    //   //     return {};
    //   //   },
    //   //   updateQuery: (prev, { subscriptionData }) => {
    //   //     // Response data not found
    //   //     if (!subscriptionData.data) {
    //   //       return prev;
    //   //     }

    //   //     const user: User = subscriptionData.data.userJoined;
    //   //     if (!user || prev.users.find((u: User) => u.id === user.id)) {
    //   //       return prev;
    //   //     }

    //   //     return Object.assign({}, prev, {
    //   //       users: [user, ...prev.users],
    //   //     });
    //   //   },
    //   // },
    // },
    // Use Simple subscription becase messagePosted doesn't involve with any query.
    $subscribe: {
      messagePosted: {
        query: messagePostedSubscription,
        result(res: { data: { messagePosted: Message } }) {
          // save data to store
          this.messages.unshift(res.data.messagePosted);
        },
      },
    },
  },
  methods: {
    async clickIcon(): Promise<void> {
      await this.$store.dispatch(`auth/${AUTH_ACTION_TYPES.LOGOUT}`);
      window.location.reload();
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
