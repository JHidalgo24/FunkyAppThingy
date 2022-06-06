<template>
<v-container>
    <v-card elevation="0">
      <h1 class="text-center font-weight-bold font-italic">Welcome Back</h1>
      <h2 class="text-center">{{userInfo.user.firstName === undefined ? 'Nothing Here': userInfo.user.firstName + ' ' + userInfo.user.lastName}}</h2>
      <v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Asian-Girl-Woman-Avatar-Smile-Happy-Female-512.png"></v-img>
      <h3>Preference</h3>
      <p>{{userInfo.user.genderPreference === undefined ? 'Nothing Here': userInfo.user.genderPreference}}</p>
      <h3>Gender</h3>
      <p>{{userInfo.user.gender === undefined ? 'Nothing Here': userInfo.user.gender}}</p>
      <h3>Favorite Genre</h3>
      <p>{{userInfo.user.favoriteGenre === undefined ? 'Nothing Here': userInfo.user.favoriteGenre}}</p>
      <h3>Favorite Artist</h3>
      <p>{{userInfo.user.favoriteArtist === undefined ? 'Nothing Here': userInfo.user.favoriteArtist}}</p>
      <h3>Age Preference</h3>
      <p>{{userInfo.user.agePreference === undefined ? 'Nothing Here': userInfo.user.agePreference}}</p>
      <h3>Average Rating</h3>
      <p>{{userInfo.user.userRating === undefined ? 'Nothing Here': userInfo.user.userRating + '/5'}}</p>
    </v-card>
</v-container>
</template>

<script>
import {
  auth, db
} from "@/firebase/firebase";
import User from "@/models/User";

export default {
    name: "ProfileDescription",
  props:{
      userID:{
        required:true
      }
  },
    data() {
        return {
            authUser: null,
            userInfo:[]
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
firestore:function() {
  return{
    userInfo: db.collection('Users').doc(this.userID)
  }
}

}
</script>

<style scoped>

</style>
