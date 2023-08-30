<template>
  <div id="app">

  <!-- Original nav bar -->
    <v-card>
      <v-layout>
      <v-app-bar
        color="primary"
        class="fill-height d-flex justify-space-between align-center"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title>Scharf Consulting</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="/contact">Hire Me</v-btn>   
      </v-app-bar>

        <!-- <v-main style="height: 500px;">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main> -->

    </v-layout>
    <v-navigation-drawer 
          v-model="drawer"
          location="left">

          <v-list>
              <v-list-item to="/">About Me
              </v-list-item>

              <v-list-item to="/data">Data Visualization
              </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </v-card>

    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null    
  }),
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet');

a:link {
  color: #206169;
}

a:visited {
  color: #2c8591;
}

a:hover {
  color: #529199;
}

body {
  font-family: "Work Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Crimson Text", serif;
}

#app {
  font-family: "Crimson Text", sans-serif;

  // Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #43d3e6;
    }
  }
}
</style>
