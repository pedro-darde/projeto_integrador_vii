import tokenMixin from "@/mixins/token-mixin";

export default {
    props: {
        softwares: Array
    },
    mixins: [tokenMixin],
    data() {
        return {
            headers: [
                {
                    text: "#",
                    align: "start",
                    sortable: true,
                    value: "id",
                },
                {text: "Nome", value: "name"},
                {text: "Descrição", value: "description"},
                {text: "Data de Início", value: "start_date"},
                {text: "Date de fim", value: "end_date"},
                {text: "Requisitos", value: "requirements"},
                {text: "", value: "actions", sortable: false},
            ],
            search: "",
        };
    },
    methods: {
        goToCreateProject() {
            this.$router.push({name: "projetos-criar"});
        },
        goToEditProject(id) {
            this.$router.push(`/projetos/editar/${id}`)
        }
    },
    computed: {
        hasPermission() {
            const token = this.getToken()
            return token && token.profile === 'ADMIN'
        }
    }
};
