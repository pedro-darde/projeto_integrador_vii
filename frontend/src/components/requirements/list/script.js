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
      ],
    };
  },
  methods: {
    saveRequirement(requirement) {
      this.items = [...this.items, requirement];
    },
  },
};
