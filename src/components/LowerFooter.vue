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
        <strong> &#169; CNY Data Ventures - {{ new Date().getFullYear() }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { name: "mdi-cellphone", link: "sms:3154474501"},
      { name: "mdi-email", link: "mailto:jason@nydataventures.com" }
    ]
  })
};
</script>

<style>
/* Enter style info
*/
</style>
