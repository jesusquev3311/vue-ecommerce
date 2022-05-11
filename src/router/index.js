import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../views/HomeView.vue"),
        children: [
            { path: "", component: () => import("../views/Products.vue") },
            { path: "details/:idProduct", component: () => import("../views/ProductDetail.vue") },
            { path: "cart", component: () => import("../views/Cart.vue") },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
