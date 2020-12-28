<template>

  <div
    id="app"
    style="
    background: #F2EEE2;
  "
  >
    <div id="nav">
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          shrink-on-scroll
          src="./assets/syracuse-skyline.svg"
          scroll-target="#scrolling-techniques-2"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>

          <v-navigation-drawer v-model="drawer" clipped temporary>
            <v-list nav dense>
              <v-list-item-group
                v-model="group"
                active-class="deep-blue--text text--accent-4"
              >
                <v-list-item>
                  <router-link to="/">About Me</router-link>
                </v-list-item>

                <v-list-item>
                  <router-link to="/about">Data Viz Projects</router-link>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>

          <!-- <v-toolbar-title>Jason Scharf |
    jasonscharf3@gmail.com | (315) 447-4501
  </v-toolbar-title>  -->

          <v-spacer></v-spacer>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="400"
        >
          <v-container style="height: 125px;"></v-container>
        </v-sheet>
      </v-card>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet');

body {
  font-family: 'Work Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
 font-family: 'Crimson Text', serif;
}

#app {
  font-family: 'Crimson Text', sans-serif;
  
  // Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
