<template>
  <div>
    <v-parallax style="width: 100%; text-align: center;" height="400" src="https://wallpapercave.com/wp/wp6400060.jpg">
      <h1 class="text-center">Welcome Back <br>{{userInfo.user.firstName === undefined ? 'Nothing Here': userInfo.user.firstName + ' ' + userInfo.user.lastName}}</h1>
    </v-parallax>

    <v-container class="text-center">

      <v-row>
        <v-col>
          <v-btn height="20vh" color="orange" text block><v-icon>mdi-account</v-icon><h3>Account</h3></v-btn>
        </v-col>
        <v-col>
          <v-btn height="20vh" color="yellow" text block><v-icon>mdi-heart</v-icon><h3>Dating</h3></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn height="20vh" color="green" text block><v-icon>mdi-message</v-icon><h3>Message</h3></v-btn>
        </v-col>
        <v-col>
          <v-btn height="20vh" color="blue" text block><v-icon>mdi-logout</v-icon><h3>Logout</h3></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {db} from "@/firebase/firebase";

export default {
  name: "WelcomeBack",
  props:{
    userID:{
      required:true
    }
  },
  data(){
    return{
      userInfo:[]
    }
  },
  firestore:function() {
    return{
      userInfo: db.collection('Users').doc(this.userID)
    }
  }
}
</script>

<style scoped>
v-icon{
  font-size: large;
}
</style>