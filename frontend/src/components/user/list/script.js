import tokenMixin from "@/mixins/token-mixin";
import swalMixin from "@/mixins/swal-mixin";
import {requirementService} from "@/services/requirement-service";
import {userService} from "@/services/user-service";

export default {
    props: {
        users: Array
    },
    mixins: [tokenMixin, swalMixin],
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
                {text: "E-mail", value: "email"},
                {text: "Perfil", value: "profile"},
                {text: "", value: "actions", sortable: false},
            ],
            search: "",
        };
    },
    methods: {
        goToEditUser(id) {
            this.$router.push(`/usuarios/editar/${id}`)
        },
        goToCreateUser() {
            this.$router.push({
                name: 'usuario-criar',
                query: {onList: true}
            })
        },
        deleteItem(item) {
            const userId = this.getToken()?.id
            if (userId === item.id) {
                this.toastError('Você não pode deletar você mesmo!')
                return;
            }
            this.showRemoveConfirm().then(res => {
                if (res.isConfirmed) {
                    userService.delete(item.id).then(res => {
                        this.toastSuccess('Usuário removido.')
                        this.$emit('reload')
                    }).catch(err => {
                        console.error(err)
                    })
                }
            })
        }
    },
    computed: {
        hasPermission() {
            const token = this.getToken()
            return token && token.profile === 'ADMIN'
        }
    }
};
