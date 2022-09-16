import isLoggedIn from "@/helpers/isLoggedIn";
import tokenMixin from "@/mixins/token-mixin";
import {sessionService} from "@/services/session-service";

export default {
    mixins: [tokenMixin],
    name: "app-bar",
    data() {
        return {
            links: [
                {title: "Home", to: "/", icon: "mdi-home"},
                {title: "Estudantes", to: "/students", icon: "mdi-account-box"},
            ],
            logo: require("../../assets/logotipo1.png"),
            drawer: false,
            group: null,
            logado: false,
        };
    },
    methods: {
        goToProjetos() {
            this.$router.push("/projetos");
        },
        logout() {
            sessionService.logout()
            this.$router.push('/login')
        },
        goToUsuarios() {
            this.$router.push('/usuarios')
        }
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
    computed: {
        showButton() {
            return this.$route.name !== 'login'
        }
    }
};
