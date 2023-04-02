import { createRouter, createWebHistory } from "vue-router";
import { useApp } from "../stores/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/",
      component: () => import("../views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const appStore = useApp();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    await appStore.isLoggedIn();
    if (appStore.user) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
