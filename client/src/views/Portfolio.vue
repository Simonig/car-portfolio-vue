<template>
  <div class="portfolio-container">
    <filter-sidebar />
    <car-list />
  </div>
</template>

<script>
import CarList from '../components/CarList';
import FilterSidebar from '../components/FilterSidebar';

export default {
  name: 'portfolio',
  components: {
    CarList,
    FilterSidebar,
  },
};
</script>

<style scooped>
.portfolio-container {
  display: flex;
}
.sidebar {
  width: 400px;
  padding: 30px;
  text-align: center;
  margin-top: 50px;
  border-right: 1px #ddd solid;
}
.cards {
}
</style>
