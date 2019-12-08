<template>
  <div class="car-list">
    <p v-if="isLoading">Loading...</p>
    <div v-if="!isLoading">
      <md-empty-state
        v-if="!getCars || getCars.length === 0"
        md-rounded
        md-icon="directions_car"
        md-label="No Cars found"
        md-description="Your filters doesn't match with any of our vehicles."
      >
        <md-button @click="resetFilters" class="md-primary md-raised">Delete filters</md-button>
      </md-empty-state>
      <router-link
        v-for="(car) in getCars"
        :to="{ name: 'detail', params: { id: car.id }}"
        :key="car.id"
      >
        <car-card :car="car" :key="car.id" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CarCard from './CarCard.vue';
import { FETCH_PORTFOLIO, RESET_FILTERS } from '../store/portfolio.module';

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
    resetFilters() {
      this.$store.commit(RESET_FILTERS);
    },
  },
  mounted() {
    this.fetchCars();
  },
};
</script>

<style>
.car-list {
  width: 100%;
}
</style>
