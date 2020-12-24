<template>
  <v-col class="mb-4">
    <h1 class="display-2 font-weight-bold mb-3">
      Tableau Data Viz
    </h1>

    <v-carousel :show-arrows="false" cycle height="700">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <img :src="item.src"
      /></v-carousel-item>
    </v-carousel>
  </v-col>
</template>

Search Vuetify #Carousels The v-carousel component is used to display large
numbers of visual content on a rotating timer. #Usage The v-carousel component
expands upon v-window by providing additional features targeted at displaying
images. Slide 1 #API v-carousel v-carousel-item #Examples #Props #Custom
delimiters Use any available icon as your carousel’s slide delimiter. First
Slide John Leider Author #Custom transition The v-carousel-item component can
have its transition/reverse-transition changed. #Cycle With the cycle prop you
can have your slides automatically transition to the next available every 6s
(default). Fourth Slide #Hide controls You can hide the carousel navigation
controls with :show-arrows="false".

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/skateboard.png")
        },
        {
          src: require("../assets/child-marriage.png")
        },
        {
          src: require("../assets/redlining.png")
        },
        {
          src: require("../assets/greenhouse-sankey.png")
        },
        {
          src: require("../assets/thanksgiving.png")
        }
      ]
    };
  }
};
</script>
