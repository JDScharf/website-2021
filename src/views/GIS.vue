<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
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
          &bull; Used ArcPy to geocode the 100 block address, transform the resulting projection to get the Latitude and Longitude, and update the data layer weekly.<br />
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
            Schedule GIS Consult
          </v-btn>
        </div>
        </button>

    <br />
    <br />
    <br />
  </v-container>
</template>

<script>
// import LowerFooter from "@/components/LowerFooter.vue";

export default {
  name: "GIS",
  components: {
  }
};
</script>

<style scoped>
.heading-viz {
  color: #2c8591;
  font-size: 40px;
}

</style>
