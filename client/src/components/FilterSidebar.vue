<template>
  <md-content class="md-elevation-1 sidebar-container">
    
    <md-toolbar class="md-transparent" md-elevation="0">Filters</md-toolbar>
  </md-content>
</template>

<script>
export default {
  name: 'filter-sidebar',
};
</script>
<style scoped>
.sidebar-container {
  width: 230px;
  min-width: 230px;
  background-color: white;
  padding: 15px;
  margin-left: 20px;
  max-width: calc(100vw - 125px);
}
</style>