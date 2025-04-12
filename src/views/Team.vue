<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
    <v-row>
      <v-col>
        <h2 class="heading-2">Team</h2>
        <br />

        <h3 class="heading-3">
          Jason Scharf - Founder / Civic Software Developer
        </h3>
        <br>
        <br>

      <v-row>
        <v-col>
          <v-img
            :src="require('../assets/jason-WS-v2.jpeg')"
            alt="Business headshot"
            class="my-3"
            contain
            max-width="400px"
        />
        </v-col>

        <v-col>
          <p itemid="team-text">
          I am a hard worker, who enjoys learning and facing new challenges. I am skilled at managing multiple projects, meeting deadlines, while always striving to provide excellent customer service to clients and stakeholders.
          <br>
          <br>

I would love to help you or your team increase their ability to obtain, manage, and get insights from your data!
&bull;
        </p>
        <br>
        <br>

        <h2 class="heading-2">Experience</h2>
        <br />

        <h3 class="heading-3">
          City of Syracuse API Team — Deputy Director of Digital Services
        </h3>
        <h5 class="heading-5">
          December 2024 - Present
        </h5>
        <br />

        <p>
          &bull; Helping to lead a team of civic web and software developers, product owners, and software trainers to improve resident services in the City of Syracuse.
        </p>

        <h3 class="heading-3">
          City of Syracuse API Team — Data Program Manager
        </h3>
        <h5 class="heading-5">
          January 2022 - December 2024
        </h5>
        <br />

        <p>
          &bull; Managed
          <a href="https://data.syr.gov/"> Open Data Syracuse</a>, the City's
          Open Data Portal website.
        </p>
        <p>
          &bull; Creating Maps and Data Visualizations in ArcGIS and Tableau
          with public data.
        </p>


        </v-col>

      </v-row>



      </v-col>
    </v-row>

    <v-row>
      <v-col>
      </v-col>
    </v-row>
    <br />
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
          Schedule a Free Consult
        </v-btn>
      </div>
    </button>

    <br />
    <br />
    <br />
  </v-container>
</template>

<script>
export default {
  name: "OurTeam",
  components: {},
};
</script>

<style>
.game-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
}
</style>
