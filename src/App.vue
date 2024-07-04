<template>
  <div id="app">
      <v-app-bar
        color="primary"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title>Jason Scharf</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="/contact">Get in Touch</v-btn>
      </v-app-bar>

    <div>
        <v-navigation-drawer 
          v-model="drawer"
          absolute
          bottom
          temporary
          @click.stop="drawer = !drawer">

          <v-list
          nav
          dense>

          <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="./assets/jason-head-min.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Jason Scharf</v-list-item-title>

        <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn></v-list-item>

              <v-list-item to="/">About Me</v-list-item>
              <v-list-item to="/web">Web Development</v-list-item>
              <v-list-item to="/data-projects">Data Projects</v-list-item>
              <v-list-item to="/data-viz">Data Visualizations</v-list-item>
              <v-list-item to="/GIS">GIS Projects</v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>

    <router-view />
    <v-card class="flex">
    <LowerFooter />
    </v-card>
  </div>

</template>

<script>
import LowerFooter from "@/components/LowerFooter.vue";

export default {
  name: "App",
  components: {
    LowerFooter
},
  data: () => ({
    drawer: false,
    group: null    
  }),
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet');

.custom-spacer {
  height: 50px;
}

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
  margin-bottom: 500px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #43d3e6;
    }
  }
}

.flex {
  background: #32848f;
}
</style>
