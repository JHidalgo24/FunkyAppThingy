<template>
  <v-app>

    <v-app-bar color="white" elevation="0" app>
      <a id="home-page" href="/" >
          <v-icon class="rainbow_text_animated">mdi-heart</v-icon>
        <h2>Melody</h2>
      </a>
      <v-spacer></v-spacer>
      <v-btn color="pink" dark @click.stop="drawer = !drawer" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main app>
        <router-view></router-view>
    </v-main>

    <v-navigation-drawer right width="4rem" v-model="drawer" app temporary color="white">
      <v-list>
        <v-list-item>
          <v-btn  to="/"  color="red"   icon><v-icon>mdi-home</v-icon></v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-btn  to="/profile"  color="orange darken-2"   icon><v-icon>mdi-account</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/dating"  color="yellow darken-2"   icon><v-icon>mdi-heart</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/messages"  color="green"   icon><v-icon>mdi-message</v-icon></v-btn>
        </v-list-item>
        <v-divider ></v-divider>
        <v-list-item>
          <v-btn to="/login"  color="blue lighten-2"  icon><v-icon>mdi-login</v-icon></v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn  to="/sign-up" color="indigo"  icon>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>


    <v-footer class="text-center mt-12" app  absolute  color="white" light>
          <div>
            <p>Personal Project Please Don't Sue Image People &copy;</p>
          </div>
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

.rainbow {
  text-align: center;
  text-decoration: underline;
  font-size: 32px;
  font-family: monospace;
  letter-spacing: 5px;
}
.rainbow_text_animated {
  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {
  0%,100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}

</style>
