import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepOrange,
        secondary: colors.deepOrange.darken1,
        accent: colors.shades.deepOrange,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.orange.lighten3,
      },
    },
  },
});