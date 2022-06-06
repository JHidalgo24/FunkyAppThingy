<template>
<div>
  <div v-if="authUser === null">
    <home-page></home-page>
  </div>
  <div v-else>
    <welcome-back :userID="authUser.uid"></welcome-back>
  </div>
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
