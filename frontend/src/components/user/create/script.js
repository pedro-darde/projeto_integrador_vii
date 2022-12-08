import { validateField } from "@/helpers/requiredField";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      profileOptions: [
        { value: "ADMIN", text: "Administrador" },
        { value: "USER", text: "Usuário Normal" },
      ],
      formValid: false,
      name: "",
      email: "",
      profile: "USER",
      password: "",
      confirmPassword: "",
      nameRules: [(v) => validateField("Nome", v)],
      emailRules: [
        (v) => validateField("E-mail", v),
        (v) => /^\S+@\S+\.\S+$/.test(v) || "Informe um e-mail válido.",
      ],
      passwordRules: [(v) => validateField("Senha", v)],
      confirmPasswordRules: [
        (v) => validateField("Senha", v),
        (v) => v === this.password || "Senhas não coincidem",
      ],
    };
  },
  methods: {
    create() {
      const dados = {
        email: this.email,
        password: this.password,
        profile: this.profile,
        name: this.name,
      };
      this.$emit("create", dados);
    },
  },
  computed: {
    onList() {
      return this.$route.query.onList;
    },
  },
};
