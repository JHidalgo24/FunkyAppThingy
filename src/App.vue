<template>
  <v-app>
    <v-app-bar color="white" elevation="0" app>
      <a id="home-page" href="/" >
        <v-icon class="rainbow_text_animated">mdi-heart</v-icon>
        <h2>Melody</h2>
      </a>
      <v-spacer></v-spacer>
      <v-btn v-if="this.authUser !== null" color="pink" dark @click.stop="drawer = !drawer" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn v-if="authUser === null" color="pink" dark text @click="showHome = !showHome">
        Sign-Up
      </v-btn>
    </v-app-bar>

    <v-main app>
      <!-- Display if signed in -->
      <router-view :userID="authUser === null ? ' ': authUser.uid" :authUser="authUser" v-show="authUser !== null"></router-view>

      <!-- Display if signed out -->
      <div v-show="!showHome"  >
        <!-- Display if signed out abd signing up -->
        <div class="" v-if="showSignUpOrLogin === false && authUser === null">
          <v-container  v-show="authUser === null && signUp === true"  >
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
                        <v-text-field v-model="user.firstName" color="indigo darken-3" label="First Name" required></v-text-field>

                        <v-text-field v-model="user.lastName" color="indigo darken-3" label="Last Name" required></v-text-field>

                        <v-text-field v-model="user.age" type="number" color="indigo darken-3" label="Age" required></v-text-field>

                        <v-select v-model="user.gender" :items="items" label="Gender" required></v-select>

                        <v-select v-model="user.trans" :items="trans" label="Are you Trans?" required></v-select>

                        <v-alert class="text-center" icon="mdi-gender-transgender" elevation="0" text color="rgb(67, 77, 127)" v-if="user.trans !== 'Yes'">If you are Trans, you will be given option to display it if you desire tagging your profile with a trans flag 🏳️‍⚧️</v-alert>
                        <v-select v-model="user.displayTrans" v-if="user.trans === 'Yes'" :items="dtrans" label="Display on Profile" required></v-select>

                        <v-text-field v-model="user.email" color="indigo darken-3" type="email" label="E-mail" required></v-text-field>

                        <v-text-field v-model="user.phoneNumber" color="indigo darken-3" label="Phone Number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></v-text-field>

                        <v-text-field color="indigo darken-3" v-model="user.password" type="password" label="Password" required></v-text-field>

                        <v-btn height="50px" class="" color="green" width="100%">
                          <v-icon>mdi-spotify</v-icon> Login
                        </v-btn>


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

                        <v-textarea v-model="user.bio" color="indigo darken-3" label="About Yourself" required></v-textarea>

                        <v-text-field v-model="user.favoriteGenre" label="Favorite Music Genre"></v-text-field>

                        <v-text-field v-model="user.favoriteArtist" label="Favorite Artist"></v-text-field>

                        <v-select v-model="user.genderPreference" :items="genders" label="Preferred Dating Gender"></v-select>

                        <h5>Optional</h5>

                        <v-text-field v-model="user.ethnicity" label="Ethnicity"></v-text-field>

                        <v-text-field v-model="user.religion" label="Religion"></v-text-field>

                        <v-text-field v-model="user.hatedGenres" label="Genres You Hate"></v-text-field>

                        <v-text-field v-model="user.hatedArtist" label="Hated Artist"></v-text-field>

                        <v-select v-model="user.agePreference" :items="agerange" label="Age Preference"></v-select>

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
                        This is for Spotify (Not Complete Yet)
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
                              <v-file-input v-model="userImages" class="" multiple label="Profile Images" prepend-icon="mdi-camera"></v-file-input>
                            </div>
                          </v-card-text>
                        </v-card>

                        <v-card elevation="0">
                          <v-alert border="top" colored-border type="warning" elevation="2">
                            You need 4 images. Any more you add will not be used.
                          </v-alert>
                        </v-card>
                      </v-container>
                    </v-form>
                  </v-card>

                  <v-btn color="gray" @click="e1 = 3">
                    Back
                  </v-btn>
                  <v-btn to="/" @click="registerUser" dark class="float-right" color="red darken-2">
                    Complete
                  </v-btn>
                </v-stepper-content>

              </v-stepper-items>
            </v-stepper>
          </v-container>
        </div>

        <!-- Display if signed out and already a user -->
        <div class="ma-4" v-else-if="showSignUpOrLogin === true && authUser === null">
          <v-row class="ma-5">
            <v-col cols lg="3" sm="12"></v-col>
            <v-col cols lg="6" sm="12">
              <v-card class=" text-center" elevation="0" width="100%">
                <h2 v-show="authUser === null">Sign-In</h2>
                <h2 v-show="authUser !== null">Sign-Out</h2>
                <v-card-text v-show="authUser === null">
                  <v-text-field v-model="userLogin.email" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="userLogin.password" label="Password" type="password"></v-text-field>
                  <v-btn @click="loginWithEmail" to="/" class="ma-5" color="pink">Login</v-btn>
                  <br>
                  <router-link to="/password-reset">Forgot Password</router-link>

                  <div v-if="showpasswordwrong === true">
                    <v-alert dense outlined type="error">
                      Incorrect Password
                    </v-alert>
                  </div>

                </v-card-text>
                <v-card-text v-show="authUser !== null">
                  <v-btn @click="logOut" class="ma-5" color="pink">Log Out</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols lg="3" sm="12"></v-col>
          </v-row>

          <!--member/not member-->
          <v-row>
            <v-col v-if="this.authUser === null" cols lg="3" sm="12">
              <v-card elevation="0" class="text-center">
                <h2>Not a Member Yet?</h2>
                <v-card-text>
                  Click the Button to Sign-Up
                </v-card-text>

                <v-btn @click="showSignUpOrLogin = false">Sign-Up</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>

      <div v-show="showHome && authUser === null">
        <home-page-page :auth-user="authUser"></home-page-page>
      </div>
    </v-main>

    <v-navigation-drawer v-if="authUser !== null" right width="4rem" v-model="drawer" app temporary color="white">
      <v-list>
        <v-list-item>
          <v-btn  to="/"  color="red"   icon><v-icon>mdi-home</v-icon></v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-btn  to="/profile"  color="orange darken-2"   icon><v-icon>mdi-account</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/dating"  color="yellow darken-2"   icon><v-icon>mdi-heart</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/messages"  color="green"   icon><v-icon>mdi-message</v-icon></v-btn>
        </v-list-item>
        <v-divider ></v-divider>
        <v-list-item>
          <v-btn to="/login"  color="blue darken-2"  icon><v-icon>mdi-logout</v-icon></v-btn>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-footer class="text-center mt-12" app  absolute  color="black" dark>
      <div>
        <p>Personal Project</p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import router from "@/routes";
import {auth, db,firebase} from "@/firebase/firebase";
import User from "@/models/User";
import {UserItem} from "@/models/UserItem";
import HomePagePage from "@/views/HomePagePage";

export default {
  name: 'App',
  router,
  components: {
    HomePagePage
  },
  data(){
    return{
      signUp:true,
      isActive:true,
      drawer: null,
      authUser:null,
      e1: 1,
      items: ['Male', 'Female', 'Non-Binary'],
      genders: ['Male 👨', 'Female 👩', 'Anything 😏'],
      agerange: ['18-25', '26-33', '34-41', '42-49', '50-57', '58-65', '66+'],
      trans: ['Yes', 'No'],
      dtrans: ['Yes', 'No'],
      transChoice: 'No',
      showSignUpOrLogin: true,
      user: new UserItem(),
      userLogin: {
        email: '',
        password: ''
      },
      userImages:null,
      userInfo:[],
      showHome:true,
      showpasswordwrong: false
    }
  },
  methods:{
    async registerUser() {
      await auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(c => {
        console.log(c)
      })
      await auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      this.user.uid = auth.currentUser.uid
      this.user.userRating = 5
      this.user.displayTrans = this.user.trans === 'No' ? 'N/A' : this.user.displayTrans
      await db.collection('Users').doc(auth.currentUser.uid).set({
        user: Object.assign({}, this.user)
      }).catch(e => {
        console.error(e)
      })

      //example stolen
      // Create a root reference

      let storageRef = firebase.storage().ref();

      let metadata = {
        contentType: 'image/jpg',
      }

      for (let i = 0; i < 4; i++) {
        await storageRef.child(auth.currentUser.uid + '/' + i).put(this.userImages[i] ,metadata)
      }

    },
    async loginWithEmail() {
      await auth.signInWithEmailAndPassword(this.userLogin.email, this.userLogin.password).catch(() => {this.showpasswordwrong = true})
    },
    async resetPassword() {
      await auth.sendPasswordResetEmail()
    },
    async logOut() {
      await auth.signOut()
    },

  },
  beforeCreate: async function () {
    await auth.onAuthStateChanged(x => {
      if (x) {
        this.authUser = new User(x);
      } else {
        this.authUser = null
      }
    })
  }


};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

*{
  font-family: 'Varela Round', sans-serif;
}

v-app-bar{
  background-image: linear-gradient( rgb(67, 77, 127),rgb(128, 119, 213));
}
.signups{
  background-image: linear-gradient( rgb(67, 77, 127),rgb(128, 119, 213));
}
.register{
  background-image: linear-gradient( rgb(67, 77, 127),rgb(128, 119, 213));
}
.footer{
  position: absolute;
}

.footer-items{
  color: white;
  text-align: center;
}
#home-page{
  text-decoration: none;
  text-underline: none;
  display: flex;
  color:  rgb(67, 77, 127);
}

.rainbow {
  text-align: center;
  text-decoration: underline;
  font-size: 32px;
  font-family: monospace;
  letter-spacing: 5px;
}
.rainbow_text_animated {
  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {
  0%,100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}

</style>
