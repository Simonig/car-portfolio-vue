<template>
  <div class="details-container">
    <car-detail></car-detail>
  </div>
</template>

<script>
import CarDetail from '../components/CarDetail';

export default {
  name: 'details',
  components: {
    CarDetail,
  },
};
</script>

<style scooped>
</style>
