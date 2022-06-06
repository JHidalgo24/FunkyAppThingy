<template>
<div>
  <div v-if="authUser !== null">
    <profile-description :userID="authUser.uid" :authUser="authUser"></profile-description>
  </div>
  <div v-else>
    loading
  </div>
</div>
</template>

<script>
import ProfileDescription from "@/components/ProfileDescription";
export default {
  name: "AccountPage",
  components: {ProfileDescription},
  props: {
    authUser: {
      required: true
    }
  }

}
</script>

<style scoped>

</style>