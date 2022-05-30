<template>
  <v-stepper non-linear v-model="e1">
    <v-stepper-header>
      <v-stepper-step editable :complete="e1> 1" step="1">
        Private Information
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable :complete="e1> 2" step="2">
        Dating Profile
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable step="3">
        Profile Picture
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-3">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols sm="12" lg="6">
                  <v-text-field color="indigo darken-3" label="First Name" required></v-text-field>
                </v-col>

                <v-col cols sm="12" lg="6">
                  <v-text-field color="indigo darken-3" label="Last Name" required></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols  sm="12" lg="6">
                  <v-text-field color="indigo darken-3" type="email" label="E-mail" required></v-text-field>
                </v-col>

                <v-col cols sm="12" lg="6">
                  <v-select :items="items" label="Gender" required></v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols class="d-inline-flex" sm="12" lg="11">
                  <v-text-field  color="indigo darken-3" label="Phone Number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></v-text-field>
                </v-col>
                <v-col sm="12" lg="1">
                  <v-btn height="50px" class="" color="green" width="100%" >
                    <v-icon>mdi-spotify</v-icon> Login
                  </v-btn>
                </v-col>
              </v-row>

            </v-container>
          </v-form>
        </v-card>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>


      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-3">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="6" md="4">
                  <v-text-field color="indigo darken-3" label="First Name" required></v-text-field>
                </v-col>

                <v-col cols="6" md="4">
                  <v-text-field color="indigo darken-3" label="Last Name" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>

        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-3">
          <v-form>
            <v-container>
              <label></label>
              <v-file-input color="indigo darken-3" label="File Input"></v-file-input>
            </v-container>
          </v-form>
        </v-card>
        <v-btn color="primary" @click="e1 = 1">
          Continue
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return{
      e1: 1,
      items: ['Male', 'Female', 'Other'],
    }
  },
}
</script>

<style scoped>

</style>
