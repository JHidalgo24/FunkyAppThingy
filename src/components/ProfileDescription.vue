<template>
<v-container>
    <v-card elevation="0">
        <h2 class="text-center">{{userInfo.user}}</h2>
        <v-btn @click="outputUser">Output to Console</v-btn>
        <v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Asian-Girl-Woman-Avatar-Smile-Happy-Female-512.png"></v-img>
        <h3>Preference</h3>
        <p>{{  }}</p>
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
    auth
} from "@/firebase/firebase";
import User from "@/models/User";

export default {
    name: "ProfileDescription",
  props:{
      userInfo:{required:true}
  }
,
    data() {
        return {
            authUser: null
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
    }

}
</script>

<style scoped>

</style>
