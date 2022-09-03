import { validateField } from "../../../helpers/requiredField";

export default {
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
};
