<template>
  <div class="user-card">
    <CardItem
      :name="name"
      :img-url="imgUrl"
      @click-icon="$emit('click-icon')"
    />
    <SearchForm
      class="user-card__search-form"
      place-holder="Search YChatter..."
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import CardItem from '@/components/atoms/CardItem.vue';
import SearchForm from '@/components/atoms/SearchForm.vue';

export default Vue.extend({
  components: { CardItem, SearchForm },
  props: {
    name: {
      type: String,
      required: true,
    } as PropOptions<string>,
    imgUrl: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
});
</script>

<style lang="scss" scoped>
.user-card {
  padding: 12px;
  border-bottom: solid 1px #24272c;

  &__search-form {
    margin-top: 10px;
  }
}
</style>
