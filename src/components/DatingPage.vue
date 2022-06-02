<template>
  <v-row class="ma-5 text-center">
    <v-col></v-col>

    <v-col class="d-inline-flex" cols lg="4" sm="12">
      <v-card width="100%">
      <v-card-title>User X</v-card-title>
<v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Music-Listen-Headphone-Song-Avatar-Hobby-Happy-512.png"></v-img>      <v-card-text>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste nisi obcaecati officia quasi, quod vel. Accusamus debitis earum est iusto neque quia, repudiandae saepe sequi soluta suscipit totam, ut?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti enim hic perspiciatis quaerat quo, saepe voluptatum. Aut, consequatur, culpa cupiditate deserunt in labore minima molestias provident quis sint ut.</p>
      </v-card-text>

      <v-btn  class="float-left ma-5 rainbow_text_animated"  icon><v-icon>mdi-close-circle-outline</v-icon></v-btn>
      <v-btn class="float-right ma-5" icon><v-icon class="rainbow_text_animated">mdi-heart</v-icon></v-btn>
      <v-btn class="text-center ma-5" icon><v-icon class="rainbow_text_animated">mdi-spotify</v-icon></v-btn>

      </v-card>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
export default {
  name: "DatingPage"
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
