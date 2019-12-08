<template>
  <div class="price-range">
    <p>Price Range:</p>

    <span>{{formatCurrency(filters.minPrice)}} - {{formatCurrency(filters.maxPrice)}}</span>
    <vue-slider
      v-bind:min="minPrice"
      v-bind:max="maxPrice"
      v-model="priceRange"
      :enable-cross="false"
    ></vue-slider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueSlider from 'vue-slider-component';
import { SET_FILTER_VALUE } from '../store/portfolio.module';
import { formatCurrency } from '../utils/formmater';

export default {
  name: 'price-range',
  components: {
    VueSlider,
  },
  computed: {
    ...mapGetters(['filters']),
    maxPrice() {
      return this.$store.getters.getFilterOptions('maxPrice');
    },
    minPrice() {
      return this.$store.getters.getFilterOptions('minPrice');
    },
    priceRange: {
      get() {
        return [
          this.$store.getters.filters.minPrice,
          this.$store.getters.filters.maxPrice,
        ];
      },
      set([minPrice, maxPrice]) {
        this.$store.commit(SET_FILTER_VALUE, {
          field: 'minPrice',
          value: minPrice,
        });
        this.$store.commit(SET_FILTER_VALUE, {
          field: 'maxPrice',
          value: maxPrice,
        });
      },
    },
  },
  methods: {
    formatCurrency,
  },
};
</script>
<style scoped>
.price-range {
  margin-bottom: 25px;
}

p {
  text-align: left;
  color: rgba(0, 0, 0, 0.54);
}
</style>