<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Projetos</h1>
    <v-divider></v-divider>
    <project-list :softwares="sofwtares" :loading="loading"></project-list>
  </v-container>
</template>

<script>
import { softwareService } from "@/services/software-service";

export default {
  data() {
    return {
      sofwtares: [],
      loading: false,
    };
  },
  async mounted() {
    console.log('pronto')
    this.loading = true;
    let axiosResponse;
    try {
      axiosResponse = await softwareService.list();
      this.sofwtares = axiosResponse.data.result;
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  },
};
</script>

<style></style>
