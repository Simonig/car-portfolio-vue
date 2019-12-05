<template>
  <div class="portfolio-container">
    <div class="sidebar">
        <h1 class="logo-font">sidebar</h1>
    </div>
    <div class="cards">
      <car-list />
    </div>
  </div>
</template>

<script>
import CarList from '../components/CarList'

export default {
  name: "portfolio",
  components: {
      CarList
  }
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
