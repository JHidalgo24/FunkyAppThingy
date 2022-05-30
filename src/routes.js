import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from "@/components/SignUp";
import HomePagePage from "@/views/HomePagePage";

Vue.use(VueRouter);

let routes = [
    { path:'/', component: HomePagePage, name:'Home'},
    { path: '/sign-up', component: SignUp, name:'Sign Up'},
    { path:'/home-page', component: HomePagePage}

]

let router = new VueRouter({routes});

export default router;
