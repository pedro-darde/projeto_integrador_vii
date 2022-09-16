import {validateField} from "@/helpers/requiredField";
import tokenMixin from "@/mixins/token-mixin";

export default {
    mixins: [tokenMixin],
    props: {
        project: Object
    },
    data() {
        return {
            formValid: false,
            nameRules: [(v) => validateField("Nome", v)],
            aboutRules: [(v) => validateField("Descrição", v)],
        }
    },
    methods: {
        edit() {
            const data = {
                id: this.project.id,
                name: this.project.name,
                startDate: this.project.start_date,
                endDate: this.project.end_date,
                about: this.project.description,
                requirements: this.project.requirements.filter(item => !item.hasOwnProperty('id')),
            };
            this.$emit("edit", data);
        }
    },
    computed: {
        dontHavePermission() {
            const token = this.getToken()
            return token && token.profile !== 'ADMIN'
        }
    }
}