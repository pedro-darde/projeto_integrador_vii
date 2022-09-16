<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Criar Usuário</h1>
    <v-divider></v-divider>
    <user-create @create="create"></user-create>
  </v-container>
</template>

<script>
import {userService} from "@/services/user-service";

export default {
  name: "Create",
  methods: {
    async create(dados) {
      try {
        await userService.create(dados)
        if(this.$route.query.onList) {
          this.$router.push('/usuarios')
        } else {
          this.$router.push('/login')
        }

      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>