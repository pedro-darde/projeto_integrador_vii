import { validateField } from "@/helpers/requiredField";
import tokenMixin from "@/mixins/token-mixin";

export default {
  mixins: [tokenMixin],
  props: {
    project: Object,
    requirements: Array,
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formValid: false,
      nameRules: [(v) => validateField("Nome", v)],
      aboutRules: [(v) => validateField("Descrição", v)],
      onlyActiveReqs: true,
    };
  },
  methods: {
    edit() {
      const data = {
        id: this.project.id,
        name: this.project.name,
        startDate: this.project.start_date,
        endDate: this.project.end_date,
        about: this.project.description,
        requirements: this.project.requirements.filter(
          (item) => !item.hasOwnProperty("id")
        ),
      };
      this.$emit("edit", data);
    },
    onChangeOnlyActive() {
      this.onlyActiveReqs = !this.onlyActiveReqs;
      let newReqs = this.project.requirements;
      if (this.onlyActiveReqs) {
        newReqs = this.requirements.filter((item) => item.active);
      }
      this.$emit("updateRequirements", newReqs);
    },
  },
  computed: {
    dontHavePermission() {
      const token = this.getToken();
      return token && token.profile !== "ADMIN";
    },
  },
};
