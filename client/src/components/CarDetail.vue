<template>
  <div class="car-details">
    <p v-if="isLoading">Loading...</p>
    <div v-if="!isLoading">
      <md-empty-state
        v-if="!car"
        md-rounded
        md-icon="directions_car"
        md-label="No Cars found"
        md-description="Your filters doesn't match with any of our vehicles."
      >
        <md-button class="md-primary md-raised">Delete filters</md-button>
      </md-empty-state>
      <div v-if="car">
        <div class="md-layout">
          <div class="md-layout-item">
            <h2>{{car.teaser.title}}</h2>
            <img class="md-elevation-1 car-image" v-bind:src="car.teaser.teaserImage" />
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item">
            <div class="md-elevation-1 equipment">
              <h4>Equipment</h4>
              <p
                v-for="(equipment) in car.car.equipmentDetails"
                :key="equipment.name"
              >{{equipment.name}}</p>
            </div>
          </div>
          <div class="md-layout-item">
            <div class="md-elevation-1 equipment">
              <p>Fuel type {{car.car.fueltype}}</p>
              <p>{{car.car.kw}} kW / {{car.car.ps}} PS</p>
              <p>Gear type {{car.car.gearingType}}</p>
              <p>Doors {{car.car.doors}}</p>
            </div>
            <h2>Price: {{car.pricing.price}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_CAR_BY_ID } from '../store/portfolio.module';

export default {
  name: 'car-detail',
  computed: {
    ...mapGetters(['isLoading']),
  },
  data() {
    return {
      car: null,
    };
  },

  methods: {
    async fetchCarById() {
      const carResponse = await this.$store
        .dispatch(FETCH_CAR_BY_ID, this.$route.params.id)
        .then(response => response.data.data);
      this.car = carResponse;
    },
  },
  mounted() {
    this.fetchCarById();
  },
};
</script>

<style scooped>
.price {
  height: 40px;
}
.equipment {
  text-align: left;
  padding: 20px;
}
.car-image {
  width: 60%;
  margin-left: 20%;
}
.md-elevation-1 {
  background: white;
  margin-left: 10%;
}
.md-layout {
  margin: 15px;
}
</style>
