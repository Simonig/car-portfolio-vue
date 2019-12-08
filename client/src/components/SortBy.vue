<template>
  <md-field>
    <label for="sortBy">Sort By:</label>
    <md-select v-model="sortBy" name="sortBy">
      <md-option value="priceAsc">Price: Ascending</md-option>
      <md-option value="priceDesc">Price: Descending</md-option>
      <md-option value="psAsc">Ps: Ascending</md-option>
      <md-option value="psDesc">Ps: Descending</md-option>
      <md-option value="alphabeticalAsc">Alphabetical A-Z</md-option>
      <md-option value="alphabeticalDesc">Alphabetical Z-A</md-option>
    </md-select>
  </md-field>
</template>

<script>
import { SET_SORT_BY } from '../store/portfolio.module';
export default {
  name: 'sort-by',
  computed: {
    sortBy: {
      get() {
        return this.$store.getters.sortBy;
      },
      set(value) {
        this.$store.commit(SET_SORT_BY, value);
      },
    },
  },
};
</script>
<style scoped>
</style>