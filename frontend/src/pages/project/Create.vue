<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Criar Projeto</h1>
    <v-divider></v-divider>
    <project-create @create="create"></project-create>
  </v-container>
</template>

<script>
import { softwareService } from "../../services/software-service";

export default {
  methods: {
    async create(dados) {
      try {
        await softwareService.create(dados);
        window.location.href = '/projetos'
      } catch (e) {}
    },
  },
};
</script>

<style>
</style>