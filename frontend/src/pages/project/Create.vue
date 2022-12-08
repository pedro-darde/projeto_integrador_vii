<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Criar Projeto</h1>
    <v-divider></v-divider>
    <project-create @create="create" :loading="loading"></project-create>
  </v-container>
</template>

<script>
import { softwareService } from "../../services/software-service";

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async create(dados) {
      this.loading = true
      try {
        await softwareService.create(dados);
      } catch (e) {
      } finally {
        this.loading = false;
        this.$router.push("/projetos");
      }
    },
  },
};
</script>

<style></style>
