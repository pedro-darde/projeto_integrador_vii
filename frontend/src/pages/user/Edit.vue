<template>
  <v-container fluid class="d-flex flex-column">
    <h1 class="text-center p-4">Editar Usuário</h1>
    <v-divider></v-divider>
    <user-edit @save="save" :user="user"></user-edit>
  </v-container>
</template>

<script>
import {userService} from "@/services/user-service";

export default {
  name: "Edit",
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async save(dados) {
      let response;
      try {
        response = await userService.edit(dados)
        this.$router.push('/usuarios')
      } catch (e) {
        console.error(e)
      }
    }
  },
  async mounted() {
    const id = this.$route.params?.id
    let response;
    try {
      response = await userService.get(id)
      this.user = response.data.result
    } catch (e) {
    }
  }
}
</script>

<style scoped>

</style>