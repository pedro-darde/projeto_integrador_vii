import {validateField} from "@/helpers/requiredField";

export default {
    props: {
        user: {
            type: Object
        }
    },
    data() {
        return {
            profileOptions: [
                {value: "ADMIN", text: 'Administrador'},
                {value: "USER", text: 'Usuário Normal'}
            ],
            formValid: false,
            nameRules: [
                (v) => validateField('Nome', v)
            ],
            emailRules: [
                (v) => validateField('E-mail', v),
                (v) => /^\S+@\S+\.\S+$/.test(v) || 'Informe um e-mail válido.'
            ],
            passwordRules: [
                (v) => validateField('Senha', v),
            ],
        }
    },
    methods: {
        save() {
            const dados = {
                email: this.user.email,
                name: this.user.name,
                id: this.user.id,
                profile: this.user.profile
            }

            this.$emit('save', dados)
        }
    }
}