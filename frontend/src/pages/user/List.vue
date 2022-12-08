<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Usuários</h1>
    <v-divider></v-divider>
    <user-list :users="users" @reload="reload" :loading="loading"></user-list>
  </v-container>
</template>

<script>
import { userService } from "@/services/user-service";

export default {
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const {
          data: { result },
        } = await userService.list();
        this.users = result;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
    async reload() {
      await this.fetchData();
    },
  },
};
</script>

<style></style>
