<template>

  <div>

    <v-card  class="text-center" width="100%">
      <div class="d-inline-flex">
        <h3>User X</h3>

      </div>
      <v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Music-Listen-Headphone-Song-Avatar-Hobby-Happy-512.png"></v-img>
      <v-btn class="text-center" icon><v-icon class="rainbow_text_animated">mdi-spotify</v-icon></v-btn>
      <v-btn @click="userdis = !userdis" icon><v-icon class="rainbow_text_animated">mdi-orbit-variant</v-icon></v-btn>
      <v-card-text v-if="userdis">
        <h3>Preference</h3>
        <p>Men & Women</p>
        <h3>Gender</h3>
        <p>Female</p>
        <h3>Favorite Genre</h3>
        <p>Pop</p>
        <h3>Favorite Artist</h3>
        <p>Ariana Grande</p>
        <h3>Average Rating</h3>
        <p>2/5</p>
      </v-card-text>
      <v-card-text v-else  color="green" width="100%">
        <v-toolbar elevation="0" color="green">
          X's Playlist
        </v-toolbar>
        <v-list elevation="0" :key="song" v-for="song in playlist">
          <v-list-item >{{song}}</v-list-item>
        </v-list>
      </v-card-text>

      <div id="action-buttons">
        <v-btn class="float-left ma-5 " icon>
          <v-icon class="rainbow_text_animated">mdi-close-circle</v-icon>
        </v-btn>
        <v-btn class="ma-5" icon>
          <v-icon class="rainbow_text_animated">mdi-play-box</v-icon>
        </v-btn>
        <v-btn class="float-right ma-5" icon>
          <v-icon class="rainbow_text_animated">mdi-heart</v-icon>
        </v-btn>
      </div>


    </v-card>

  </div>

</template>

<script>
export default {
  name: "DatingPage",
  data(){
    return{
      playlist:['tune 1','tune 2','tune 3','tune 4','tune 5'],
      userdis:true
    }
  }
}
</script>

<style scoped>
/*Stolen thingy code pen*/

.rainbow {
  text-align: center;
  text-decoration: underline;
  font-size: 32px;
  font-family: monospace;
  letter-spacing: 5px;
}

.rainbow_text_animated {
  background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {

  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}
#action-buttons{
  font-size: xx-large;
}
</style>
