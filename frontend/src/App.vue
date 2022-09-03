<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container fluid class="pa-4 pa-sm-6 pa-md-8">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import isLoggedIn from "./helpers/isLoggedIn";
export default {
  created() {
    console.log('aqui')
    if (!isLoggedIn()) this.$router.push("/login");
  },
};
</script>
