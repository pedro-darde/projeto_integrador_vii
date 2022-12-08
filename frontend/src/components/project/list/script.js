import tokenMixin from "@/mixins/token-mixin";
import { reportService } from "../../../services/report-service";

export default {
  props: {
    softwares: Array,
    loading: {
      type: Boolean,
      default: false,
    },
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
        { text: "Nome", value: "name" },
        { text: "Descrição", value: "description" },
        { text: "Início", value: "start_date" },
        { text: "Fim", value: "end_date" },
        { text: "Requisitos", value: "requirements" },
        { text: "", value: "actions", sortable: false },
      ],
      search: "",
    };
  },
  methods: {
    goToCreateProject() {
      this.$router.push({ name: "projetos-criar" });
    },
    goToEditProject(id) {
      this.$router.push(`/projetos/editar/${id}`);
    },
    downloadReport() {
      reportService.generateSoftwareReport(this.softwares);
    },
    requirementActive(item) {
      return item.requirements.filter((item) => item.active);
    },
  },
  computed: {
    hasPermission() {
      const token = this.getToken();
      return token && token.profile === "ADMIN";
    },
  },
};
