<template>
  <div>

    <v-parallax
        style="width: 100%; text-align: center;"
        height="400"
        src="https://wallpapercave.com/wp/wp6400060.jpg"
    >
      <h1>Tune into your soulmate</h1>
    </v-parallax>

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
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>
