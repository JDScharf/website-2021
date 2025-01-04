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

    <v-row>
      <v-col>
        <h3 class="heading-3">
          City of Syracuse Sanitation - PowerBI Dashboard
        </h3>
        <br />
        <p>
          &bull;  To help provide a real-time view into department metrics, collaborated with department heads and User Interface Designer to create a dashboard.<br />
          &bull; Used PowerBI for Data Visualization, along with Dax queries.<br />
          &bull; Used Figma to create mockups to share with executive decision makers for their input and feedback.
        </p>
        <br />
      </v-col>
    </v-row>
    <!-- <template>
  <v-container fluid> -->
    <!-- <v-row>
      <v-col> -->
        <!-- <div class="powerbi-iframe-container"> -->
          <iframe title="Illegal Setouts Dashboard" width="100%" height="50%" src="https://app.powerbigov.us/view?r=eyJrIjoiMGI5OGQ5Y2YtZDA2Ny00ZmY4LTk4NmEtZDlhM2I3MzU4ODRkIiwidCI6ImUwYWFjNjk1LWZkNWItNDViMi1iZWQzLWQ5M2VjNWMwYzZjZSJ9&embedImagePlaceholder=true" frameborder="0" allowFullScreen="true"></iframe>
        <!-- </div> -->
        <!-- </v-col>
    </v-row> -->
  <!-- </v-container> -->
<!-- </template> -->

<br />
<br />
<br />
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
      </v-col>
    </v-row>
    <template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="iframe-container">
          <iframe
            src="https://observablehq.com/embed/711195ecdac1c2c9?cells=chart"
            frameborder="0"
            style="border:0;"
            class="responsive-iframe"
          >
            iFrames are not supported on this page.
          </iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

    <br>
    <br>
    <br>

    <v-row>
      <v-col>
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
      </v-col>
    </v-row>

   

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

.powerbi-iframe-container {
  position: relative;
  width: 100%;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Adjust the height for larger screens */
@media (min-width: 600px) {
  .iframe-container {
    padding-top: 90%; /* This makes the height around 800px for wider screens */
  }
}

/* Adjust the height for smaller screens */
@media (max-width: 599px) {
  .iframe-container {
    padding-top: 125%; /* This increases the height for smaller screens */
  }
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
