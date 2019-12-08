<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img v-bind:src="car.teaser.teaserImage" />
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">{{car.teaser.title}}</span>
          <span class="md-subhead">{{formatCurrency(car.pricing.price)}} Monthly</span>
          <span class="md-subhead">{{car.car.kw}} kW / {{car.car.ps}} PS</span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
import { formatCurrency } from '../utils/formmater';

export default {
  name: 'CardCar',
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatCurrency,
  },
};
</script>
<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

