import { validateField } from "../../../helpers/requiredField";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formValid: false,
      name: "",
      startDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      endDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      created_by: "",
      about: "",
      nameRules: [(v) => validateField("Nome", v)],
      aboutRules: [(v) => validateField("Descrição", v)],
      requirements: [],
    };
  },
  methods: {
    onCreate() {
      const data = {
        name: this.name,
        startDate: this.startDate,
        endDate: this.endDate,
        about: this.about,
        requirements: this.requirements,
      };

      this.$emit("create", data);
    },
  },
};
