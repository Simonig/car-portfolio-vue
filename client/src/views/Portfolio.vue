<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Car Portfolio</h1>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="portfolio-container">
          <filter-sidebar />
          <car-list />
        </div>
      </div>
    </div>
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
h1 {
  margin-left: 300px;
}
.sidebar {
  width: 400px;
  padding: 30px;
  text-align: center;
  margin-top: 50px;
  border-right: 1px #ddd solid;
}
</style>
