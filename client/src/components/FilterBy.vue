<template>
  <div>
    <label>{{title}}</label>
    <md-checkbox
      v-for="(val) in options"
      v-model="selectedFilters"
      v-bind:value="val"
      v-bind:key="val"
    >{{val}}</md-checkbox>
  </div>
</template>

<script>
import { SET_FILTER_VALUE } from '../store/portfolio.module';
export default {
  name: 'filter-by',
  props: {
    filterBy: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    options() {
      return this.$store.getters.getFilterOptions(this.filterBy);
    },
    selectedFilters: {
      get() {
        return this.$store.getters.getFilterValue(this.filterBy);
      },
      set(value) {
        this.$store.commit(SET_FILTER_VALUE, { value, field: this.filterBy });
      },
    },
  },
};
</script>
<style scoped>
  .md-checkbox {
    display: flex;
  }
</style>