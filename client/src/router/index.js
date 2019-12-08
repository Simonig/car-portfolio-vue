import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "portfolio",
            component: () => import("../views/Portfolio")
        },
        {
            path: "/detail/:id",
            name: "detail",
            component: () => import("../views/Details"),
            props: true,
        },
    ]
}

)