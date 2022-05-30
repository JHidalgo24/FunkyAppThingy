<template>
  <v-app>

          <v-app-bar elevation="12"  app >
            <v-icon color="rgb(67, 77, 127)">mdi-heart</v-icon>
            <h2>Dating App</h2>
            <v-spacer></v-spacer>
            <v-btn
                color="pink"
                dark
                @click.stop="drawer = !drawer"
                icon
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-app-bar>

    <v-main app>
        <router-view></router-view>
    </v-main>
    <v-navigation-drawer

        v-model="drawer"
        absolute
        temporary
        color="white"
    >
      <v-list>
        <v-list-item>
          <v-btn width="100%"  color="white" class="register" block text>Login</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn color="white" to="/sign-up" class="signups" block text>
            Sign up
          </v-btn>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-footer app color="black" >
      <v-row class="footer-items" >
        <v-col>
          <h1>bullshit one</h1>
        </v-col>
        <v-col>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>

        </v-col>
        <v-col>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>
          <h4>bullshit one</h4>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import router from "@/routes";

export default {
  name: 'App',
  router,
  components: {

  },
  data(){
    return{
      isActive:true,
      drawer: null,

    }
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
.footer-items{
  color: white;
  text-align: center;
}

</style>
