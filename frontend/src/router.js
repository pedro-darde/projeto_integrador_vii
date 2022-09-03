import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import ProjectList from './pages/project/List.vue'
import ProjectCreate from './pages/project/Create.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "Login" },
  },
  {
    path: "/projetos",
    name: "projetos",
    component: ProjectList,
    meta: { title: "Projetos - Listagem" },
  },
  {
    path: "/projetos/criar",
    name: "projetos-criar",
    component: ProjectCreate,
    meta: { title: "Projetos - Criar" },
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
