<template>
  <v-app>

    <v-app-bar elevation="12" app>
      <v-icon color="rgb(67, 77, 127)">mdi-heart</v-icon>
      <h2>Dating App</h2>
      <v-spacer></v-spacer>
      <v-btn color="pink" dark @click.stop="drawer = !drawer" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main app>
        <router-view></router-view>
    </v-main>

    <v-navigation-drawer v-model="drawer" absolute temporary color="white">
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

    <v-container>
      <v-row>
        <v-col cols sm="12" md="6" lg="6">
          <v-card elevation="2">
            <v-card-title>Why Join?</v-card-title>

            <v-card-text>
              Let's be honest here, how many times has you gone out with someone
              and everything is going great. Good food, having some laughs everything
              is breezy, until they bust out some wack ass music. Im talking real wack,
              like you can't get jiggy with it no more. Well, now you can put those moments
              behind you.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols sm="12" md="6" lg="6">
          <v-card elevation="2">
            <v-card-title>What We Do</v-card-title>

            <v-card-text>
              Okay so you get why you should join but what exactly is the deal with music anyway?
              Listen I don't know about you but geeking out over a specific band or song is super cool.
              The vibes are there, you guys have a connection, having fun. Why? all because you both
              have similar tastes in music. This app will pair people up based on what music they like.
              We're talking genres, artist, songs, playlists.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!--footer that messes up the cards above-->
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
.footer{
  position: absolute;
}

.footer-items{
  color: white;
  text-align: center;
}

</style>
