<template>
  <v-row no-gutters class="mt-4">
    <v-col cols="4">
      <v-text-field
        label="Pesquisar"
        v-model="search"
        append-icon="mdi-magnify"
        single-line
        hide-details
      >
      </v-text-field>
    </v-col>
    <v-col cols="8" class="d-flex justify-end">
      <v-btn @click="goToCreateProject"> Criar Projeto </v-btn>
    </v-col>

    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        :search="search"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="js" src="./script.js">
</script>

<style scoped lang="scss" src="./styles.scss">
</style>