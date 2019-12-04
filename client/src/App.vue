<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p v-if="isLoading">Loading...</p>
    <md-card v-for="(car, index) in getCars" :car="car" :key="car.portfolio + index">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img v-bind:src="car.teaser.teaserImage"/>
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{car.teaser.title}}</span>
            <span class="md-subhead">1/1 image</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { MdCard } from 'vue-material/dist/components';

import HelloWorld from './components/HelloWorld.vue';
import { FETCH_PORTFOLIO } from './store/portfolio.module';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.use(MdCard);

export default {
  name: 'app',
  components: {
    HelloWorld,
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
