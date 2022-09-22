<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">{{ getPageTitle("Projeto") }}</h1>
    <v-divider></v-divider>
    <project-edit :project="project" @edit="edit"></project-edit>
  </v-container>
</template>

<script>
import pageTitleMixin from "../../mixins/page-title-mixin";
import { softwareService } from "../../services/software-service";

export default {
  mixins: [pageTitleMixin],
  data() {
    return {
      project: {},
    };
  },
  async mounted() {
    const id = this.$route.params?.id;
    let response;
    try {
      response = await softwareService.get(id);
      this.project = response.result;
    } catch (e) {}
  },
  methods: {
    async edit(dados) {
      let response;
      try {
        response = await softwareService.edit(dados);
        this.$router.push("/projetos");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>
