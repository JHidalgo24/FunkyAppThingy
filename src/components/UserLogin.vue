<template>
    <v-row class="ma-5">
      <v-col cols lg="3" sm="12"></v-col>
      <v-col cols lg="6" sm="12"><v-card class=" text-center"  elevation="0"  width="100%" >
        <h2 >User Login</h2>
        <v-card-text >
          <v-text-field   label="Email" type="email"></v-text-field>
          <v-text-field label="Password" type="password"></v-text-field>
          <v-btn class="ma-5" color="pink">Login</v-btn>
          <br>
          <a>Forgot Password</a>
        </v-card-text>
      </v-card></v-col>
      <v-col cols lg="3" sm="12"></v-col>

    </v-row>
</template>

<script>
export default {
  name: "UserLogin"
}
</script>

<style scoped>

</style>
