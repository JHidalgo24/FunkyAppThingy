<template>
<v-card class="mt-4 mx-auto">
    <v-sheet class="v-sheet--offset mx-auto" color="gray" dark elevation="12" max-width="calc(100% - 32px)">
        <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
        <div class="text-h4 font-weight-light mb-2">
            Visits per Month
        </div>
        <div class="subheading font-weight-light grey--text">
            User Sign Ins
        </div>
        <v-divider class="my-2"></v-divider>
        <v-icon class="mr-2" small>
            mdi-clock
        </v-icon>
        <span class="text-caption grey--text font-weight-light">Last Sign-In 45 mins Ago</span>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    name: "UserAnalytics",
    data: () => ({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        value: [11, 200, 34, 42, 54, 64, 17, 48, 49, 10, 41, 32]
    }),
}
</script>

<style scoped>

</style>
