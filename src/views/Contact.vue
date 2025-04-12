<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
    <v-row>
      <v-col>
        <h2 class="heading-2">Free Project Consultation</h2>
        <br>
        <br>
        <v-card 
        id="contact-card">
        <form id="contact-form"
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
                  label="Data Management"
                  value="data-management"
                  name="data-management"
                ></v-checkbox>
                <v-checkbox
                  label="Map Creation (GIS)"
                  value="gis"
                  name="gis"
                ></v-checkbox>
                <v-checkbox
                  label="Data Visualization"
                  value="data-viz"
                  name="data-viz"
                ></v-checkbox>
                <v-checkbox
                  label="Web Design & Development"
                  value="design"
                  name="design"
                ></v-checkbox>
              </v-col>
            </v-row>

            <!-- Urgency Scale -->
            <v-row justify="center">
              <v-col cols="12" md="8" class="text-center">
                <h3>How soon do you need this project done?</h3>
                <v-radio-group v-model="urgency" row class="justify-center d-flex">
                <v-radio label="Not Urgent" value="Not Urgent"></v-radio>
                <v-radio label="Slightly Urgent" value="Slightly Urgent"></v-radio>
                <v-radio label="Very Urgent" value="Very Urgent"></v-radio>
              </v-radio-group>
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
                <button type="submit">
                <v-btn
                  depressed
                  elevation="10"
                  color="#2c8591"
                  raised
                  rounded
                  dark
                  >Submit
                </v-btn>
              </button>
              </v-col>
            </v-row>
        </form>
      </v-card>

        <br />
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import LowerFooter from "@/components/LowerFooter.vue";

export default {
  data() {
    return {
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

#contact-card {
  max-width: 700px;
  padding: 30px;
  margin: auto;
  font-family: "Roboto", sans-serif;
  border-style: solid;
  border-width: 0.5px;
  border-color: #424242;
  background-color: #fffbf5;
  border-radius: 3%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
