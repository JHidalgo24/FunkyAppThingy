<template>
<v-container>
    <v-stepper elevation="0" non-linear v-model="e1">
        <v-stepper-header>
            <v-stepper-step color="rgb(67, 77, 127)" :complete="e1> 1" step="1">
                Private Information
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="rgb(67, 77, 127)" :complete="e1> 2" step="2">
                Dating Profile
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="rgb(67, 77, 127)" :complete="e1> 3" step="3">
                Profile Picture
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="rgb(67, 77, 127)" :complete="e1> 4" step="4">
                Spotify Information
            </v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>

            <v-stepper-content step="1">
                <v-card elevation="0" class="mb-12" color="">
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols sm="12" lg="4">
                                    <v-text-field v-model="user.firstName" color="indigo darken-3" label="First Name" required></v-text-field>
                                </v-col>

                                <v-col cols sm="12" lg="4">
                                    <v-text-field v-model="user.lastName" color="indigo darken-3" label="Last Name" required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols sm="12" lg="6">
                                    <v-text-field v-model="user.age" type="number" color="indigo darken-3" label="Age" required></v-text-field>
                                </v-col>

                                <v-col cols sm="12" lg="6">
                                    <v-select v-model="user.gender" :items="items" label="Gender" required></v-select>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols sm="12" lg="6">
                                    <v-select v-model="user.trans" :items="trans" label="Are you Trans?" required></v-select>
                                </v-col>

                                <v-col cols sm="12" lg="6">
                                    <v-alert class="text-center" icon="mdi-gender-transgender" elevation="0" text color="rgb(67, 77, 127)" v-if="user.trans !== 'Yes'">If you are Trans, you will be given option to display it if you desire tagging your profile with a trans flag 🏳️‍⚧️</v-alert>
                                    <v-select v-model="user.displayTrans" v-if="user.trans === 'Yes'" :items="dtrans" label="Display on Profile" required></v-select>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols sm="12" lg="6">
                                    <v-text-field v-model="user.email" color="indigo darken-3" type="email" label="E-mail" required></v-text-field>
                                </v-col>

                                <v-col cols class="d-inline-flex" sm="12" lg="6">
                                    <v-text-field v-model="user.phoneNumber" color="indigo darken-3" label="Phone Number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols sm="12" lg="12">
                                    <v-text-field color="indigo darken-3" v-model="user.password" type="password" label="Password" required></v-text-field>
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
                <v-card elevation="0" class="mb-12" color="">
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols>
                                    <v-textarea v-model="user.bio" color="indigo darken-3" label="About Yourself" required></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-text-field v-model="user.favoriteGenre" label="Favorite Music Genre"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="user.favoriteArtist" label="Favorite Artist"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select v-model="user.genderPreference" :items="genders" label="Preferred Dating Gender"></v-select>
                                </v-col>
                            </v-row>

                            <h5>Optional</h5>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="user.ethnicity" label="Ethnicity"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="user.religion" label="Religion"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="user.hatedGenres" label="Genres You Hate"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="user.hatedArtist" label="Hated Artist"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select v-model="user.agePreference" :items="agerange" label="Age Preference"></v-select>
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
                <v-card elevation="0" class="mb-12" color="">
                    <v-form>
                        <v-container>

                        </v-container>
                    </v-form>
                </v-card>
                <v-btn color="gray" @click="e1 = 2">
                    Back
                </v-btn>

                <v-btn dark class="float-right" color="pink" @click="e1 = 4">
                    Continue
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
                <v-card elevation="0" class="mb-12" color="">
                    <v-form>
                        <v-container>

                            <v-card elevation="0">
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
                <v-btn color="gray" @click="e1 = 3">
                    Back
                </v-btn>
                <v-btn @click="registerUser" dark class="float-right" color="red darken-2">
                    Complete
                </v-btn>
            </v-stepper-content>

        </v-stepper-items>
    </v-stepper>
</v-container>
</template>

<script>
import {
    auth,
    db
} from "@/firebase/firebase";
import {
    UserItem
} from "@/models/UserItem";
export default {
    name: "SignUp",
    data() {
        return {
            e1: 1,
            items: ['Male', 'Female', 'Non-Binary'],
            genders: ['Male 👨', 'Female 👩', 'Anything 😏'],
            agerange: ['18-25', '26-33', '34-41', '42-49', '50-57', '58-65', '66+'],
            trans: ['Yes', 'No'],
            dtrans: ['Yes', 'No'],
            transChoice: 'No',
            user: new UserItem()
        }
    },
    methods: {
        async registerUser() {
            await auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(c => {
                console.log(c)
            })
            await auth.signInWithEmailAndPassword(this.user.email, this.user.password)
            this.user.uid = auth.currentUser.uid
            this.user.userRating = 5

            await db.collection('Users').doc(this.user.uid).set({
                user: Object.assign({}, this.user)
            })
        }
    }
}
</script>

<style scoped>

</style>
