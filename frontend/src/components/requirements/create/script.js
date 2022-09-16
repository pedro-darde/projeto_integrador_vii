import tokenMixin from "@/mixins/token-mixin";

export default {
    mixins: [tokenMixin],
    props: {
        value: {
            type: Boolean,
        },
        currentRequirement: {
            type: Object,
        },
    },
    data() {
        return {
            requirement: this.currentRequirement,
            complexityOptions: [
                {value: 0, text: "Baixo"},
                {value: 1, text: "Médio"},
                {value: 2, text: "Alta"},
            ],
            priorityOptions: [
                {value: 0, text: "Baixa"},
                {value: 1, text: "Média"},
                {value: 2, text: "Alta"},
                {value: 3, text: "Muito Alta"},
            ],
            typeOptions: [
                {value: 0, text: "Requisito Funcional (RF)"},
                {value: 1, text: "Requisito Não Funcional (RNF)"},
            ],
        };
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        dontHavePermission() {
            const token = this.getToken()
            return token && token.profile !== 'ADMIN'
        },
        isEdit() {
            return this.requirement.hasOwnProperty('id')
        }
    },
    methods: {
        save() {
            this.$emit("save", this.requirement);
            this.dialog = false;
        },
    },
    watch: {
        dialog() {
            this.requirement = this.currentRequirement;
            this.$emit('close')
        },
    },
};