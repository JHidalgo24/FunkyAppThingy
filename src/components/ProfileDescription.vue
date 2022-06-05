<template>
<v-container>
    <v-card elevation="0">
        <h2 class="text-center">{{userInfo.user.firstName === undefined ? 'Nothing Here': userInfo.user.firstName}}</h2>
        <v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Asian-Girl-Woman-Avatar-Smile-Happy-Female-512.png"></v-img>


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
