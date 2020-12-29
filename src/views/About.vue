<template>
  <v-col class="mb-4">
    <h3 class="heading-viz">
      Tableau Data Viz
      <br />
    </h3>
          <br />
        <p>
       &bull; You can explore these visualizations further at my <a href="https://public.tableau.com/profile/jason.scharf#!/" target="_blank"> Tableau Public Profile.</a>
      </p>
      <br />

    <v-carousel :show-arrows="false" cycle height="800" >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <img :src="item.src"
      /></v-carousel-item>
    </v-carousel>
    <LowerFooter msg="test" />
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
import LowerFooter from "@/components/LowerFooter.vue";

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
      ],
      components: {
      LowerFooter
  },
    };
  }
};
</script>

<style scoped>
.heading-viz {
  color: #2C8591;
  font-size: 40px;
}
/*
.carousel-container {
  position: relative;
  padding-bottom: 0px;
  padding-top: 5px;
  height: 700;
  overflow: hidden;
}
*/
</style>
