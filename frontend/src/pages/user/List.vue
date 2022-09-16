<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Usuários</h1>
    <v-divider></v-divider>
    <user-list :users="users" @reload="reload"></user-list>
  </v-container>
</template>

<script>

import {userService} from "@/services/user-service";

export default {
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      let axiosResponse;
      try {
        axiosResponse = await userService.list()
        this.users = axiosResponse.data.result
      } catch (e) {
      }
    },
    async reload() {
      await this.fetchData()
    }
  }
};
</script>

<style>
</style>