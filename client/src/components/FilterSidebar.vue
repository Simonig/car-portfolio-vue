<template>
  <md-content class="md-elevation-1 sidebar-container">
    <md-toolbar class="md-transparent" md-elevation="0">Filters</md-toolbar>
    <price-range></price-range>
    <sort-by></sort-by>
    <filter-by filterBy="make" title="Filter by brand:"></filter-by>
    <filter-by filterBy="fueltype" title="Filter by fuel type:"></filter-by>
  
  </md-content>
</template>

<script>
import PriceRange from './PriceRange';
import SortBy from './SortBy';
import FilterBy from './FilterBy';

export default {
  name: 'filter-sidebar',
  components: {
    PriceRange,
    SortBy,
    FilterBy,
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
  max-width: calc(100vw - 125px);
}
.md-toolbar {
  padding-left: 0;
}
</style>