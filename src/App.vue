<template>
  <v-app>

    <v-app-bar elevation="12" app>
      <a id="home-page" href="/" >
        <v-icon color="rgb(67, 77, 127)">mdi-heart</v-icon>
        <h2 >Melody</h2>
      </a>
      <v-spacer></v-spacer>
      <v-btn color="pink" dark @click.stop="drawer = !drawer" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main app>
        <router-view></router-view>
    </v-main>

    <v-navigation-drawer width="4rem" v-model="drawer" app temporary color="white">
      <v-list>
        <v-list-item>
          <v-btn  to="/"  color="red"   icon><v-icon>mdi-home</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/profile"  color="orange darken-2"   icon><v-icon>mdi-account</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/dating"  color="yellow darken-2"   icon><v-icon>mdi-heart</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/messages"  color="green"   icon><v-icon>mdi-message</v-icon></v-btn>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list>
        <v-list-item>
          <v-btn to="/login"  color="blue lighten-2"  icon><v-icon>mdi-login</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/sign-up" color="indigo"  icon>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-btn>
        </v-list-item>
        </v-list>
      </template>

    </v-navigation-drawer>
    <v-spacer></v-spacer>
    <!--footer that messes up the cards above-->
    <v-footer   color="black" >
      <v-row class="footer-items" >

        <v-col>
          <h3 class="">Personal Project Please Don't Sue Image People &copy;</h3>
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
#home-page{
  text-decoration: none;
  text-underline: none;
  display: flex;
  color:  rgb(67, 77, 127);
}

</style>
