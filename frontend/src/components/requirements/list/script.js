import makeId from "../../../helpers/makeId";
export default {
  props: {
    requirements: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      items: this.requirements,
      open: false,
      headers: [
        { text: "Nome", value: "name" },
        { text: "Descrição", value: "description" },
        { text: "", value: "actions", sortable: false },
      ],
      currentRequirement: {
        unique_identifier: makeId(5),
        name: "",
        description: "",
        complexity: "",
        priority: "",
        version: 1,
        type: "",
      },
      removedRequirements: [],
    };
  },
  methods: {
    saveRequirement(requirement) {
      const index = this.getIndex(requirement);

      if (~index) {
        Object.assign(this.items[index], requirement);
      } else {
        this.items.push(requirement);
      }
    },
    deleteItem(item) {
      const indexRemove = this.getIndex(item);
      this.items.splice(indexRemove, 1);
      this.removedRequirements.push(item.id);
    },
    editItem(item) {
      this.currentRequirement = JSON.parse(JSON.stringify(item));
      this.open = true;
    },
    getIndex(requirement) {
      return this.items.findIndex(
        (item) => item.unique_identifier === requirement.unique_identifier
      );
    },
  },
};
