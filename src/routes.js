import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from "@/components/SignUp";
import HomePagePage from "@/views/HomePagePage";
import UserLogin from "@/components/UserLogin";
import datingPage from "@/components/DatingPage";
import ProfileDescription from "@/components/ProfileDescription";
import UserAnalytics from "@/components/UserAnalytics";
import ResetPassword from "@/components/ResetPassword";

Vue.use(VueRouter);

let routes = [
    { path:'/', component: HomePagePage, name:'Home'},
    { path: '/sign-up', component: SignUp, name:'Sign Up'},
    { path:'/home-page', component: HomePagePage},
    {path:'/login',component: UserLogin},
    {path:'/dating',component: datingPage},
    {path:'/profile',component: ProfileDescription},
    {path: '/analytics', component: UserAnalytics},
    {path:'/password-reset',component: ResetPassword}

]

let router = new VueRouter({routes});

export default router;
