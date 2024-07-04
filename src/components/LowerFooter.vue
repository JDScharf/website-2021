<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      class="flex"
      color="#80DEEA"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Jason Scharf Designs</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { name: "mdi-cellphone", link: "sms:3154474501"},
      { name: "mdi-email", link: "mailto:jasonscharf3@gmail.com" },
      { name: "mdi-github", link: "https://github.com/jdscharf" },
      { name: "mdi-linkedin", link: "https://www.linkedin.com/in/jason-d-scharf" }
    ]
  })
};
</script>

<style>
/* Enter style info
*/
</style>
