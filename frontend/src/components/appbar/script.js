export default {
  name: "app-bar",
  data() {
    return {
      links: [
        { title: "Home", to: "/", icon: "mdi-home" },
        { title: "Estudantes", to: "/students", icon: "mdi-account-box" },
      ],
      logo: require("../../assets/logotipo1.png"),
      drawer: false,
      group: null,
    };
  },
  methods: {
    goToProjetos() {
      this.$router.push("/projetos");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
