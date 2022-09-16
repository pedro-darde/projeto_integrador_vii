<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Projetos</h1>
    <v-divider></v-divider>
    <project-list :softwares="sofwtares"></project-list>
  </v-container>
</template>

<script>
import {softwareService} from "@/services/software-service";

export default {
  data() {
    return {
      sofwtares: []
    }
  },
  async mounted() {
    let axiosResponse;
    try {
      axiosResponse = await softwareService.list()
      this.sofwtares = axiosResponse.data.result
    } catch (e) {
    }
  }
};
</script>

<style>
</style>