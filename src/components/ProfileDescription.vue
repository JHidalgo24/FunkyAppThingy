<template>
<v-container>
    <v-card elevation="0">
      <h2 class="text-center">{{userInfo.user.firstName === undefined ? 'Nothing Here': userInfo.user.firstName + ' ' + userInfo.user.lastName}}</h2>
<!--      <v-img src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Asian-Girl-Woman-Avatar-Smile-Happy-Female-512.png"></v-img>-->
      <template>
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            hide-delimiters
            show-arrows-on-hover
            :show-arrows="false"
            interval="2400"
            progress

            progress-color="rgb(67, 77, 127)"
        >
          <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
          >
            <v-sheet

                height="100%"
            >
              <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
              >
<v-img src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </template>
<!--      Image Carosel-->
      <h3>Preference</h3>
      <p>{{userInfo.user.genderPreference === undefined ? 'Nothing Here': userInfo.user.genderPreference}}</p>
      <h3>Gender</h3>
      <p>{{userInfo.user.gender === undefined ? 'Nothing Here': userInfo.user.gender}}</p>
      <h3>Favorite Genre</h3>
      <p>{{userInfo.user.favoriteGenre === undefined ? 'Nothing Here': userInfo.user.favoriteGenre}}</p>
      <h3>Favorite Artist</h3>
      <p>{{userInfo.user.favoriteArtist === undefined ? 'Nothing Here': userInfo.user.favoriteArtist}}</p>
      <h3>Age Preference</h3>
      <p>{{userInfo.user.agePreference === undefined ? 'Nothing Here': userInfo.user.agePreference}}</p>
      <h3>Average Rating</h3>
      <p>{{userInfo.user.userRating === undefined ? 'Nothing Here': userInfo.user.userRating + '/5'}}</p>
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
            userInfo:[],

          slides: [
            'Image One',
            'Image Two',
            'Image Three',
            'Image Four',
          ],
        }
    },
    methods: {

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
* {
  box-sizing: border-box;
}

.slider {
  width: 300px;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;



  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  /*
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: mandatory;
  */
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.slides > div:target {
  /*   transform: scale(0.8); */
}
.author-info {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
}
.author-info a {
  color: white;
}
img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider > a {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  position: relative;
}
.slider > a:active {
  top: 1px;
}
.slider > a:focus {
  background: #000;
}

/* Don't need button navigation */
@supports (scroll-snap-type) {
  .slider > a {
    display: none;
  }
}

html, body {
  height: 100%;
  overflow: hidden;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #74ABE2, #5563DE);
  font-family: 'Ropa Sans', sans-serif;
}
</style>
