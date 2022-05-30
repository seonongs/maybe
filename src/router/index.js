import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/board/BoardView";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/board",
        name: "BoardView",
        component: BoardView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
