import makeId from "../../../helpers/makeId";
import swalMixin from "@/mixins/swal-mixin";
import {requirementService} from "@/services/requirement-service";
import tokenMixin from "@/mixins/token-mixin";

export default {
    mixins: [swalMixin, tokenMixin],
    props: {
        requirements: {
            type: Array,
        },
    },
    data() {
        return {
            open: false,
            headers: [
                {text: "Nome", value: "name"},
                {text: "Descrição", value: "description"},
                {text: 'Versão', value: 'version'},
                {text: 'Ativo', value: 'active'},
                {text: "", value: "actions", sortable: false},
            ],
            currentRequirement: {
                unique_identifier: makeId(5),
                name: "",
                description: "",
                complexity: "",
                priority: "",
                version: 1,
                type: "",
                active: true
            },
            removedRequirements: [],
        };
    },
    methods: {
        saveRequirement(requirement) {
            if (this.hasRequirementOnDatabase(requirement)) {
                this.saveOnDatabase(requirement)
                return;
            }
            this.saveOnlyLocal(requirement)
        },
        deleteItem(item) {
            let key = 'unique_identifier'
            if (this.hasRequirementOnDatabase(item)) {
                this.removeFromDatabase(item)
                key = 'id'
            }
            this.removeFromArray(item, key)
        },
        saveOnDatabase(requirement) {
            requirement.software = this.$route.params.id
            requirementService.edit(requirement).then(res => {
                const index = this.getIndex(requirement, 'id')
                this.assignRequirement(index, res.data)
            })
        },
        hasRequirementOnDatabase(item) {
            return item.hasOwnProperty('id') && item.id
        },
        removeFromArray(item, key) {
            const indexRemove = this.getIndex(item, key);
            this.requirements.splice(indexRemove, 1);
            this.removedRequirements.push(item.id);
        },
        removeFromDatabase(item) {
            this.showRemoveConfirm().then(res => {
                if (res.isConfirmed) {
                    requirementService.delete(item.id).then(res => {
                        this.toastSuccess('Requisito removido.')
                    }).catch(err => {
                        console.error(err)
                    })
                }
            })
        },
        saveOnlyLocal(requirement) {
            const index = this.getIndex(requirement, 'unique_identifier');
            if (~index) {
                this.assignRequirement(requirement, index)
            } else {
                this.requirements.push(requirement);
            }
        },
        assignRequirement(index, requirement) {
            Object.assign(this.requirements[index], requirement);
        },
        editItem(item) {
            this.currentRequirement = JSON.parse(JSON.stringify(item));
            this.open = true;
        },
        getIndex(requirement, key) {
            return this.requirements.findIndex(
                (item) => item[key] === requirement[key]
            );
        },
        onCloseModalCreateEditRequirement() {
            this.currentRequirement = {
                unique_identifier: makeId(5),
                name: "",
                description: "",
                complexity: "",
                priority: "",
                version: 1,
                type: "",
                active: true
            }
        }
    },
    computed: {
        dontHavePermission() {
            const token = this.getToken()
            return token && token.profile !== 'ADMIN'
        }
    }
};
