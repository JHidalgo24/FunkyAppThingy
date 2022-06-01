<template>
<v-stepper elevation="0" non-linear v-model="e1">
    <v-stepper-header>
        <v-stepper-step color="rgb(67, 77, 127)" editable :complete="e1> 1" step="1">
            Private Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="rgb(67, 77, 127)" editable :complete="e1> 2" step="2">
            Dating Profile
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="rgb(67, 77, 127)" editable step="3">
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

                            <v-col cols sm="12" lg="6">
                                <v-text-field type="number" color="indigo darken-3" label="Age" required></v-text-field>
                            </v-col>

                            <v-col cols sm="12" lg="6">
                                <v-select :items="items" label="Gender" required></v-select>
                            </v-col>
                        </v-row>

                      <v-row>

                        <v-col cols sm="12" lg="6">

                          <v-select v-model="transChoice" :items="trans" label="Are you Trans?" required></v-select>
                        </v-col>

                        <v-col cols sm="12" lg="6">
                          <v-alert class="text-center" icon="mdi-gender-transgender" elevation="12" text color="rgb(67, 77, 127)" v-if="transChoice !== 'Yes'">If you are Trans, you will be given option to display it if you desire tagging your profile with a trans flag 🏳️‍⚧️</v-alert>
                          <v-select v-if="transChoice === 'Yes'" :items="dtrans" label="Display on Profile" required></v-select>
                        </v-col>


                      </v-row>

                        <v-row>
                            <v-col cols sm="12" lg="6">
                                <v-text-field color="indigo darken-3" type="email" label="E-mail" required></v-text-field>
                            </v-col>

                            <v-col cols class="d-inline-flex" sm="12" lg="6">
                                <v-text-field color="indigo darken-3" label="Phone Number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></v-text-field>
                            </v-col>
                        </v-row>

                      <v-row>
                        <v-col cols sm="12" lg="12">
                          <v-text-field color="indigo darken-3" type="password" label="Password" required></v-text-field>
                        </v-col>


                      </v-row>

                        <v-row>
                            <v-col>
                                <v-btn height="50px" class="" color="green" width="100%">
                                    <v-icon>mdi-spotify</v-icon> Login
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-container>
                </v-form>
            </v-card>

            <v-btn dark class="float-right" color="pink" @click="e1 = 2">
                Continue
            </v-btn>

        </v-stepper-content>

        <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-3">
                <v-form>
                    <v-container>
                        <v-row>

                            <v-col cols lg="11" md="6">
                                <v-textarea color="indigo darken-3" label="About Yourself" required></v-textarea>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field label="Favorite Music Genre"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select :items="genders" label="Preferred Dating Gender"></v-select>
                            </v-col>
                        </v-row>

                      <h5>Optional</h5>
                      <v-row>
                        <v-col>
                          <v-text-field label="Ethnicity"></v-text-field>
                        </v-col>
                        <v-col>
                          <v-text-field label="Religion"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field label="Genres You Hate"></v-text-field>
                        </v-col>
                        <v-col>
                          <v-select :items="agerange" label="Age Range Preference"></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                </v-form>
            </v-card>

            <v-btn color="gray" @click="e1 = 1">
                Back
            </v-btn>

            <v-btn dark class="float-right" color="pink" @click="e1 = 3">
                Continue
            </v-btn>

        </v-stepper-content>

        <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-3">
                <v-form>
                    <v-container>

                        <v-card>
                            <div class="d-flex">
                                <v-img width="25%" src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Music-Listen-Headphone-Song-Avatar-Hobby-Happy-512.png"></v-img>
                                <v-img width="25%" src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-African-Avatar-Girl-Happy-Female-People-512.png"></v-img>
                                <v-img width="25%" src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Gentleman-Mister-Man-Moustache-Dad-Teacher-Avatar-512.png"></v-img>
                                <v-img width="25%" src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Asian-Girl-Woman-Avatar-Smile-Happy-Female-512.png"></v-img>
                            </div>
                            <v-card-title>
                                Upload your profile images (Up to 4)
                            </v-card-title>
                            <v-card-text>
                                <div class="text-right">
                                    <v-file-input class="" multiple label="Profile Images" prepend-icon="mdi-camera"></v-file-input>
                                </div>

                            </v-card-text>

                        </v-card>
                    </v-container>
                </v-form>
            </v-card>
            <v-btn color="gray" @click="e1 = 2">
                Back
            </v-btn>
            <v-btn dark class="float-right" color="pink" @click="e1 = 1">
                Continue
            </v-btn>
        </v-stepper-content>

    </v-stepper-items>
</v-stepper>
</template>

<script>
export default {
    name: "SignUp",
    data() {
        return {
            e1: 1,
            items: ['Male', 'Female', 'Non-Binary'],
            genders: ['Male 👨', 'Female 👩', 'Anything 😏'],
            agerange:['18-25','26-33','34-41','42-49','50-57','58-65','66+'],
            trans:['Yes','No'],
            dtrans:['Yes','No'],
            transChoice:'No'
        }
    },
}
</script>

<style scoped>

</style>
