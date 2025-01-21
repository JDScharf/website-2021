<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
    <v-row>
      <v-col>
        <h2 class="heading-2">Free Project Consultation</h2>
        <form
          action="https://formspree.io/f/mdkkqyov"
          method="POST"
        >
            <!-- Name Field -->
            <v-row>
              <v-col>
                <v-text-field
                  label="Name"
                  outlined
                  dense
                  name="name"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Project Selection -->
            <v-row>
              <v-col>
                <h3>Project(s) you would like help with</h3>
                <v-checkbox
                  label="Data Visualization"
                  value="data-viz"
                  name="data-viz"
                ></v-checkbox>
                <v-checkbox
                  label="Data Analysis"
                  value="analysis"
                  name="analysis"
                ></v-checkbox>
                <v-checkbox
                  label="Map Creation (GIS)"
                  value="gis"
                  name="gis"
                ></v-checkbox>
                <v-checkbox
                  label="Web Design & Development"
                  value="design"
                  name="design"
                ></v-checkbox>
              </v-col>
            </v-row>

            <!-- Urgency Scale -->
            <v-row>
              <v-col>
                <h3>How soon do you need this project done?</h3>
                <!-- <v-radio-group v-model="urgency" row>
                <v-radio label="Not Urgent" value="1"></v-radio>
                <v-radio label="Slightly Urgent" value="2"></v-radio>
                <v-radio label="Neutral" value="3"></v-radio>
                <v-radio label="Urgent" value="4"></v-radio>
                <v-radio label="Very Urgent" value="5"></v-radio>
              </v-radio-group> -->

                <template>
                  <div>
                    <!-- <div class="text-caption">Tick labels</div> -->

                    <v-slider
                      v-model="urgency"
                      :tick-labels="tickLabels"
                      :max="2"
                      step="1"
                      ticks="always"
                      tick-size="3"
                    ></v-slider>
                  </div>
                </template>
              </v-col>
            </v-row>

            <!-- Email and Phone -->
            <v-row>
              <v-col>
                <v-text-field
                  label="Email"
                  outlined
                  dense
                  name="email"
                  type="email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Phone Number"
                  outlined
                  dense
                  name="phone"
                  type="tel"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Submit Button -->
            <v-row>
              <v-col class="text-center">
                <v-btn
                  type="submit"
                  depressed
                  elevation="10"
                  color="#2c8591"
                  raised
                  rounded
                  dark
                  >Submit
                </v-btn>
              </v-col>
            </v-row>
        </form>
        <br />
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGmcocMdkdgOSTk7tw17K0Ci3rZxsILwzW4eNXrhKceEp6Kg/viewform?embedded=true" width="640" height="1600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->

<script>
// import LowerFooter from "@/components/LowerFooter.vue";

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
      // value: 0,
      urgency: 0,
      tickLabels: [
        'Not Urgent',
        'Neutral',
        'Urgent'
    ],
      components: {
        // LowerFooter
      },
    };
  },
};
</script>

<style scoped>
/* .entry-form {
  height: 1300;
} */

#consultation-form {
  max-width: 700px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
}

h3 {
  font-weight: 500;
  color: #2c8591;
}

.v-btn {
  padding: 10px 20px;
  background-color: #2c8591;
  color: white;
  font-weight: 600;
}

.v-btn:hover {
  background-color: #246d73;
}

.v-text-field,
.v-checkbox,
.v-radio {
  margin-bottom: 15px;
}

.v-radio-group {
  display: flex;
  justify-content: space-between;
}

.v-checkbox label,
.v-radio label {
  font-size: 14px;
  color: #424242;
}
</style>
