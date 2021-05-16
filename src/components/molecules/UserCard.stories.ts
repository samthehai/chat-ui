import UserCard from '@/components/molecules/UserCard.vue';

export default {
  title: 'UserCard',
};

export const Basic = () => ({
  components: { UserCard },
  template: `<UserCard />`,
});
