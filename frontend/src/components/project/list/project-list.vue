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
      <v-btn @click="goToCreateProject" v-if="hasPermission">
        Criar Projeto</v-btn
      >
      <v-btn @click="downloadReport"> Gerar PDF </v-btn>
    </v-col>

    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="softwares"
        :items-per-page="5"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item.start_date="{ item }">
          <span>{{ item.start_date | date }}</span>
        </template>
        <template v-slot:item.end_date="{ item }">
          <span>{{ item.end_date | date }}</span>
        </template>
        <template v-slot:item.requirements="{ item }">
          <span v-if="item.requirements.length">
            <v-chip v-for="requirement in item.requirements">
              {{ requirement.name }}
            </v-chip>
          </span>
          <span v-else> Sem requisito </span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="goToEditProject(item.id)">
            {{ hasPermission ? "mdi-pencil" : "mdi-eye" }}
          </v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="js" src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
