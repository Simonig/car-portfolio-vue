<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img v-bind:src="car.teaser.teaserImage" />
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">{{car.teaser.title}}</span>
          <span class="md-subhead">1/1 image</span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>

export default {
  name: 'CardCar',
  props: {
    car: {
      type: Object,
      required: true,
    },
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

