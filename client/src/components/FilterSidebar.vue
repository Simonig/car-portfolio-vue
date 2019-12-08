<template>
  <md-content class="md-elevation-1 sidebar-container">
    <md-toolbar class="md-transparent" md-elevation="0">Filters</md-toolbar>
    <price-range></price-range>
    <sort-by></sort-by>
  </md-content>
</template>

<script>
import PriceRange from './PriceRange';
import SortBy from './SortBy';

export default {
  name: 'filter-sidebar',
  components: {
    PriceRange,
    SortBy,
  },
};
</script>
<style scoped>
.sidebar-container {
  width: 280px;
  min-width: 280px;
  background-color: white;
  padding: 20px;
  margin-left: 20px;
  height: 600px;
  max-width: calc(100vw - 125px);
}
.md-toolbar {
  padding-left: 0;
}
</style>