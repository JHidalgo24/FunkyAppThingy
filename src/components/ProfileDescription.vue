<template>
<v-container>
    <v-card elevation="0">
        <h2 class="text-center">{{user}}</h2>
        <v-btn @click="outputUser">Poopoo</v-btn>
        <v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Asian-Girl-Woman-Avatar-Smile-Happy-Female-512.png"></v-img>
        <h3>Preference</h3>
        <p>Men & Women</p>
        <h3>Gender</h3>
        <p>Female</p>
        <h3>Favorite Genre</h3>
        <p>Pop</p>
        <h3>Favorite Artist</h3>
        <p>Ariana Grande</p>
        <h3>Age Preference</h3>
        <p>26-33</p>
        <h3>Average Rating</h3>
        <p>2/5</p>
        <h3>Average Time on Melody in last 30 days</h3>
        <p>3:23</p>

    </v-card>
</v-container>
</template>

<script>
import {
    auth,
    db
} from "@/firebase/firebase";
import User from "@/models/User";

export default {
    name: "ProfileDescription",

    data() {
        return {
            authUser: null,
          userInfo: null
        }
    },
    methods: {
        outputUser() {
          console.log(this.userInfo)
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
    },
  firestore(){
      return{
        userInfo: db.collection('Users').doc(auth.currentUser.uid)
      }
  }

}
</script>

<style scoped>

</style>
