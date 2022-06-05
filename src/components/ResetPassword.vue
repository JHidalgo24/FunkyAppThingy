<template>
  <v-row class="ma-5">
    <v-col cols lg="3" sm="12"></v-col>
    <v-col cols lg="6" sm="12"><v-card class=" text-center"  elevation="0"  width="100%" >
      <p v-show="noUser" style="color: red;font-weight: bolder">There is no record of this user</p>
      <h2 >Reset Password</h2>
      <v-card-text >
        <v-text-field v-model="user.email" label="Email" type="email"></v-text-field>
        <v-btn @click="resetPassword" class="ma-5" color="pink">Send Email</v-btn>
        <br>
      </v-card-text>
    </v-card></v-col>
    <v-col cols lg="3" sm="12"></v-col>

  </v-row>
</template>

<script>
import {auth} from "@/firebase/firebase";
import User from "@/models/User";
export default {
  name: "ResetPassword",
  data(){
    return{
      user:{email:'',password:''},
      authUser: null,
      noUser:false
    }
  },
  methods:{
    async resetPassword(){
      console.log(this.user.email)
      await auth.sendPasswordResetEmail(this.user.email).catch(()=>{
        this.noUser = !this.noUser
      })
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
