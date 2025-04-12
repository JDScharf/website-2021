<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
    <div>
      <v-row>
        <v-col>
          <h2 class="heading-2">Data Projects</h2>
          <br />

          <h3 class="heading-3">
            Syracuse Open Data - Python/SQL Auto Update Pipelines
          </h3>
          <br />

          <p>
            &bull; After becoming familiar with Syracuse's auto-update Python codebase which managed
            and updated datasets, I helped add eight more data pipelines, pulling
            data from on-premise and our Azure data warehouse to feed Syracuse’s
            open data portal using ESRI's Python API.<br />
            &bull; Syracuse Open Data Portal site can be visited at:
            <a href="https://data.syr.gov/" target="_blank">data.syr.gov</a>
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <a href="https://data.syr.gov/" target="_blank"
            ><v-img
              :src="require('../assets/data-syr.png')"
              alt="Screenshot of Syracuse Open Data portal's home page."
              class="my-3"
              contain
              width="100%"
          /></a>
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
            Schedule Data Project Consult
          </v-btn>
        </div>
      </button>

      <br />
      <br />
      <br />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "DataProjects",
  components: {},
};
</script>

<style scoped>
.heading-viz {
  color: #2c8591;
  font-size: 40px;
}
</style>
