<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Car Portfolio</h1>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
<style scoped>
h1 {
  margin-left: 300px;
}
</style>
