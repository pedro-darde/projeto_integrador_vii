<template>
  <v-container fluid>
    <v-row class="mt-2">
      <v-col cols="12 d-flex justify-end">
        <v-btn @click.stop="open = true"> Criar </v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
    <create-edit-requirement
      v-model="open"
      @save="saveRequirement"
    ></create-edit-requirement>
  </v-container>
</template>

<script src="./script.js">
</script>

<style scoped lang="scss" src="./styles.scss">
</style>