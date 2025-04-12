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
          City of Syracuse Sanitation - PowerBI Dashboard
        </h3>
        <br />
        <p>
          &bull;  To help provide a real-time view into department metrics, collaborated with department heads and User Interface Designer to create a dashboard.<br />
          &bull; Used PowerBI for Data Visualization, along with Dax queries.<br />
          &bull; Used Figma to create mockups to share with executive decision makers for their input and feedback.
        </p>
        <br />
        <div class="powerbi-iframe-container">
          <iframe title="Illegal Setouts Dashboard" width="100%" height="100%" src="https://app.powerbigov.us/view?r=eyJrIjoiMGI5OGQ5Y2YtZDA2Ny00ZmY4LTk4NmEtZDlhM2I3MzU4ODRkIiwidCI6ImUwYWFjNjk1LWZkNWItNDViMi1iZWQzLWQ5M2VjNWMwYzZjZSJ9&embedImagePlaceholder=true" frameborder="0" allowFullScreen="true"></iframe>
        </div>
</v-col>
</v-row>
<br />
<br />
<br />
<br />

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
  height: 800px;
}

.iframe-container {
  position: relative;
  width: 100%;
}

.responsive-iframe {
  width: 100%;
  height: 1100px;
  display: block;
}

/* Adjust the height for smaller screens */
@media (max-width: 599px) {
    .iframe-container {
      padding-top: 0%; /* This increases the height for smaller screens */
    }
    /* Changes observable iframe to decrease in height on mobile */
    .responsive-iframe {
    width: 100%;
    height: 400px;
    display: block;
  }
    /* Changes powerBI iframe to decrease in height on mobile */
  .powerbi-iframe-container {
    height: 300px;
  }
}
</style>
