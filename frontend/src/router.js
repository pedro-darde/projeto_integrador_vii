import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import ProjectList from './pages/project/List.vue'
import ProjectCreate from './pages/project/Create.vue'
import ProjectEdit from './pages/project/Edit.vue'
import UserCreate from './pages/user/Create.vue'
import UserEdit from './pages/user/Edit.vue'
import UserList from './pages/user/List.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {title: "Home"},
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {title: "Login"},
    },
    {
        path: "/projetos",
        name: "projetos",
        component: ProjectList,
        meta: {title: "Projetos - Listagem"},
    },
    {
        path: "/projetos/criar",
        name: "projetos-criar",
        component: ProjectCreate,
        meta: {title: "Projetos - Criar"},
    },
    {
        path: '/projetos/editar/:id',
        name: 'projetos-editar',
        component: ProjectEdit,
        meta: {title: 'Projetos - Editar '}
    },
    {
        path: '/usuario/criar',
        name: 'usuario-criar',
        component: UserCreate,
        meta: {title: 'Usuário - Criar'}
    },
    {
        path: '/usuarios',
        name: 'usuarios-listar',
        component: UserList,
        meta: {title: 'Usuário - Listagem '}
    },
    {
        path: '/usuarios/editar/:id',
        name: 'usuario-editar',
        component: UserEdit,
        meta: {title: 'Usuário - Editar]'}
    }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
