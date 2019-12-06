<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-if="!isLoading">
      <car-card v-for="(car) in getCars" :car="car" :key="car.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CarCard from './CarCard.vue';
import { FETCH_PORTFOLIO } from '../store/portfolio.module';

export default {
  name: 'car-list',
  components: {
    CarCard,
  },
  computed: {
    ...mapGetters(['isLoading', 'getCars']),
  },
  methods: {
    fetchCars() {
      this.$store.dispatch(FETCH_PORTFOLIO);
    },
  },
  mounted() {
    this.fetchCars();
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
