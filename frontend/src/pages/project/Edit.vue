<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">{{ getPageTitle("Projeto") }}</h1>
    <v-divider></v-divider>
    <project-edit
      :project="project"
      @edit="edit"
      :loading="loadingSubmit"
      :requirements="requirements"
      @updateRequirements="changeRequirments"
    ></project-edit>
    <loading :loading="loading"></loading>
  </v-container>
</template>

<script>
import pageTitleMixin from "../../mixins/page-title-mixin";
import { softwareService } from "../../services/software-service";

export default {
  mixins: [pageTitleMixin],
  data() {
    return {
      loading: false,
      loadingSubmit: false,
      project: {},
      requirements: [],
    };
  },
  async mounted() {
    this.loading = true;
    const id = this.$route.params?.id;
    let response;
    try {
      response = await softwareService.get(id);
      this.project = response.result;
      this.requirements = this.project.requirements.filter(
        (item) => item.active
      );
    } catch (e) {
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async edit(dados) {
      let response;
      this.loadingSubmit = true;
      try {
        response = await softwareService.edit(dados);
      } catch (e) {
        console.error(e);
      } finally {
        this.loadingSubmit = false;
        this.$router.push("/projetos");
      }
    },
    changeRequirments(requirements) {
      console.log(requirements)
      this.requirements = requirements;
    },
  },
};
</script>

<style></style>
