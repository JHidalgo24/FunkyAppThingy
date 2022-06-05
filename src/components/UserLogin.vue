<template>
  <v-container>
    <v-row class="ma-5">
      <v-col cols lg="3" sm="12"></v-col>
      <v-col cols lg="6" sm="12">
        <v-card class=" text-center" elevation="0" width="100%">
          <h2 v-show="authUser === null">Sign-In</h2>
          <h2 v-show="authUser !== null">Sign-Out</h2>
          <v-card-text v-show="authUser === null">
            <v-text-field v-model="userLogin.email" label="Email" type="email"></v-text-field>
            <v-text-field v-model="userLogin.password" label="Password" type="password"></v-text-field>
            <v-btn @click="loginWithEmail" class="ma-5" color="pink">Login</v-btn>
            <br>
            <router-link to="/password-reset">Forgot Password</router-link>
          </v-card-text>
          <v-card-text v-show="authUser !== null">
            <v-btn @click="logOut" class="ma-5" color="pink">Log Out</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols lg="3" sm="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
    auth
} from "@/firebase/firebase";
import User from "@/models/User";
export default {
    name: "UserLogin",
    data() {
        return {
            userLogin: {
                email: '',
                password: ''
            },
            authUser: null
        }
    },
    methods: {
        async loginWithEmail() {
            await auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        },
        async resetPassword() {
            await auth.sendPasswordResetEmail()
        },
        async logOut() {
            await auth.signOut()
        }
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
}
</script>

<style scoped>

</style>
