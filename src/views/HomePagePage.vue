<template>
<div>
  <div v-show="authUser === null">
    <home-page></home-page>
  </div>
<welcome-back :userID="authUser.uid"></welcome-back>
</div>
</template>

<script>
import HomePage from "@/components/HomePage";
import welcomeBack from "@/components/WelcomeBack";
export default {
  name: "HomePagePage",
  components: {HomePage,welcomeBack},
  props:{
    authUser:{required:true}
  }
}
</script>

<style scoped>

</style>
