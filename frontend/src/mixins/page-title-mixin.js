import tokenMixin from "./token-mixin";
export default {
  mixins: [tokenMixin],

  methods: {
    getPageTitle(page) {
      const token = this.getToken();

      if (token && token.profile === "ADMIN") return `Editar ${page}`;
      return `Visualizar ${page}`;
    },
  },
};
