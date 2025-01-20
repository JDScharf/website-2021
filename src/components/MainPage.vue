<template>
  <v-container>
    <!-- Add spacer for 200px empty space -->
    <v-spacer class="custom-spacer"></v-spacer>
    <v-row>
      <v-col class="text-left">
        <br />
        <br />
        <h1 class="heading-name">
          Jason Scharf
        </h1>
        <br />
        <h2 class="heading-job-title">
          Data Program Manager
        </h2>
        <br />
      </v-col>

      <v-col id="middle-column" :align-self="center">
        <v-card
          id="rounded-card"
          class="justify-center"
          max-height="350"
          min-height="350"
        >
          <v-img
            :src="require('../assets/jason-WS-v2.jpeg')"
            class="rounded-img"
            max-height="350"
            max-width="350"
          />
        </v-card>
      </v-col>

      <v-col class="text-right">
        <h3 class="subheading font-weight-regular">
          I am a hard worker, who enjoys learning and facing new challenges. I
          am skilled at managing multiple projects, meeting deadlines, while
          always striving to provide excellent customer service to clients and
          stakeholders. <br />
          <br />
          I would love to help you or your team increase their ability to
          obtain, manage, and get insights from your data!
        </h3>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h2 class="heading-2">Services Offered</h2>
      </v-col>
    </v-row>
    <br />

    <template> </template>

    <v-row>
      <v-col>
        <v-card class="service-card" shaped outlined color="#FFE0B2">
          <v-img
            :src="require('../assets/icons/app-development.png')"
            alt="Image of a computer icon"
            class="my-3"
            contain
            width="100%"
            max-height="250px"
          />
          <br />
          <h3 class="heading-3">
            Web Development
          </h3>
          <br />
          <div>
            <button>
              <div class="text-button">
                <v-btn
                  to="/web"
                  depressed
                  elevation="10"
                  color="#2c8591"
                  raised
                  rounded
                  dark
                >
                  View Web Projects
                </v-btn>
              </div>
            </button>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="service-card" shaped outlined color="#FFE0B2">
          <v-img
            :src="require('../assets/icons/data-management.png')"
            alt="Image of a computer icon"
            class="my-3"
            contain
            width="100%"
            max-height="250px"
          />
          <br />
          <h3 class="heading-3">
            Data Management
          </h3>

          <br />
          <button>
            <div class="text-button">
              <v-btn
                to="/data-projects"
                depressed
                elevation="10"
                color="#2c8591"
                raised
                rounded
                dark
              >
                View Data Projects
              </v-btn>
            </div>
          </button>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="service-card" shaped outlined color="#FFE0B2">
          <v-img
            :src="require('../assets/icons/data-viz.png')"
            alt="Image of a computer icon"
            class="my-3"
            contain
            width="100%"
            max-height="250px"
          />
          <br />
          <h3 class="heading-3">
            Data Visualizations
          </h3>

          <br />
          <button>
            <div class="text-button">
              <v-btn
                to="/data-viz"
                depressed
                elevation="10"
                color="#2c8591"
                raised
                rounded
                dark
              >
                View Visualizations
              </v-btn>
            </div>
          </button>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="service-card" shaped outlined color="#FFE0B2">
          <v-img
            :src="require('../assets/icons/map-256.png')"
            alt="Image of a computer icon"
            class="my-3"
            contain
            width="100%"
            max-height="250px"
          />
          <br />
          <h3 class="heading-3">
            Geospatial Analysis
          </h3>

          <br />
          <button>
            <div class="text-button">
              <v-btn
                to="/GIS"
                depressed
                elevation="10"
                color="#2c8591"
                raised
                rounded
                dark
              >
                View GIS Projects
              </v-btn>
            </div>
          </button>
        </v-card>
      </v-col>
    </v-row>

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
          Get in Touch
        </v-btn>
      </div>
    </button>
    <br />
    <br />
    <br />

    <router-view />
  </v-container>
</template>

<script></script>

<style>
.custom-spacer {
  height: 50px;
}

#rounded-card {
  border-radius: 50%;
}
#middle-column {
  justify-content: center;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.text-right {
  padding-top: 35px;
}
.boxed {
  border: 1px solid rgb(1, 2, 1);
  max-width: 100px;
}
.service-card {
  padding: 10%;
}

.heading-name {
  color: #2c8591;
  font-size: 50px;
}

.heading-job-title {
  color: #645e71;
  font-size: 35px;
}

.heading-2 {
  color: #2c8591;
  font-size: 40px;
}

.heading-3 {
  color: #645e71;
  font-size: 30px;
}

.heading-4 {
  color: #645e71;
  font-size: 25px;
}
.heading-5 {
  color: #645e71;
  font-size: 20px;
}
.text-button {
  color: #2c8591;
}
</style>
