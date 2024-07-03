<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
  <v-row>
  <v-col class="mb-4">
    <h2 class="heading-viz">
      Data Visualizations
      <br />
    </h2>
    <br />

    <h3 class="heading-3">
          Tableau Projects
        </h3>
        <br />

        <button>
        <div class="text-button">
          <v-btn
            href="https://public.tableau.com/profile/jason.scharf#!/"
            target="_blank"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            View Tableau Profile
          </v-btn>
        </div>
        </button>
        <br />
        <br />

    <v-carousel :show-arrows="false" cycle height="800">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <img :src="item.src"
      /></v-carousel-item>
    </v-carousel>
    <LowerFooter msg="test" />
  </v-col>
</v-row>

<br />
<br />
<br />
<br />

<v-row>
      <v-col>
        <h3 class="heading-3">
          JavaScript D3 Code Violations Bubble Chart
        </h3>
        <br />
        <p>
          &bull; Created a Bubble Chart using tallies from Code violations data as part of a tutorial on Syracuse's Open Data portal.<br />
          &bull; Did some transformations of the data in Python, then created the chart in D3 using Observable.<br />
          &bull; Code can be viewed at:
          <a href="https://github.com/CityofSyracuse/D3-Tutorial-Open-Data/blob/main/README.md" target="_blank"
            >github.com/CityofSyracuse/D3-Tutorial-Open-Data/blob/main/README.md</a
          >
        </p>
        <br />

        <iframe src="https://observablehq.com/embed/711195ecdac1c2c9?cells=chart" width="80%" height="1000" frameborder="0" style="border:0" allowfullscreen>iFrames are not supported on this page.</iframe>
      </v-col>
    </v-row>

    <br>
    <br>
    <br>

<v-row>
      <v-col>
        <h2 class="heading-viz">
          Geospatial (GIS) Projects
        </h2>
        <br />
        <h3 class="heading-3">
          Syracuse Interactive Crime Map
        </h3>
        <br />
        <p>
          &bull; Helped create the data pipeline to pull the crime data and do some data cleaning in Python.<br />
          &bull; Used ArcPy to geocode the 100 block address and transforming the resulting projection, into Latitude and Longitude, and update the data layer weekly.<br />
          &bull; Led a small team to build and design the map below in ArcGIS Online.<br />
        </p>
        <br />

        <iframe src="https://syr.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=3a5a6e90d15042a8ab39817211f3a3de" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen>iFrames are not supported on this page.</iframe>
      </v-col>
    </v-row>

    <br>
    <br>
    <br>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Massachussets Roads & Parks Map
        </h3>
        <br />
        <p>
          &bull; Made as part of ESRI's Cartography course.<br />
          &bull; Created in ArcGIS Pro.</p>

        <v-img
          :src="require('../assets/MassLayout.jpg')"
          alt="Image of a map of Massachussets"
          class="my-3"
          contain
          width="100%"
          max-height="1500px"
        />
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <button>
        <div class="text-button">
          <v-btn
            to="/contact"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            Schedule Data Visualization Consult
          </v-btn>
        </div>
        </button>

    <br />
    <br />
    <br />
  </v-container>
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
// import LowerFooter from "@/components/LowerFooter.vue";

export default {
  name: "DataViz",
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
        // LowerFooter
      }
    };
  }
};
</script>

<style scoped>
.heading-viz {
  color: #2c8591;
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
