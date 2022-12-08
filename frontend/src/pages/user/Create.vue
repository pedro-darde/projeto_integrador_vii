<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Criar Usuário</h1>
    <v-divider></v-divider>
    <user-create @create="create" :loading="loading"></user-create>
  </v-container>
</template>

<script>
import { userService } from "@/services/user-service";

export default {
  name: "Create",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async create(dados) {
      this.loading = true;

      try {
        await userService.create(dados);
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
        if (this.$route.query.onList) {
          this.$router.push("/usuarios");
        } else {
          this.$router.push("/login");
        }
      }
    },
  },
};
</script>

<style scoped></style>
