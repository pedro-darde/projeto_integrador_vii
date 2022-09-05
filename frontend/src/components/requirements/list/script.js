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
        // {
        //   text: "#",
        //   align: "start",
        //   sortable: true,
        //   value: "id",
        // },
        { text: "Nome", value: "name" },
        { text: "Descrição", value: "description" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    saveRequirement(requirement) {
      this.items = [...this.items, requirement];
    },
    deleteItem({ id }) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
};
