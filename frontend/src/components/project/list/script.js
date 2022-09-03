export default {
  data() {
    return {
      items: [
        {
          id: "1",
          description: "Qualquer descrição",
          created_by: "Eu mesmo",
          active: "Sim",
        },
        {
          id: "2",
          description: "Qualquer descrição 2",
          created_by: "Eu mesmo 2",
          active: "Não",
        },
      ],
      headers: [
        {
          text: "#",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Descrição", value: "description" },
        { text: "Criado por", value: "created_by" },
        { text: "Ativo", value: "active" },
      ],
    };
  },
  methods: {
    goToCreateProject() {
      this.$router.push({ name: "projetos-criar" });
    },
  },
};
