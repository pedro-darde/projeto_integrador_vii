<template>
  <v-container fluid>
    <v-form v-model="formValid" @submit.prevent="onCreate">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            label="Nome"
            outlined
            dense
            :rules="nameRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <datepicker v-model="startDate" label="Data de Início"></datepicker>
        </v-col>
        <v-col cols="6" md="2">
          <datepicker v-model="endDate" label="Data de Fim" type="date">
          </datepicker>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="created_by" label="Responsável" outlined dense>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="about"
            label="Sobre o Projeto"
            rows="3"
            outlined
            dense
            :rules="aboutRules"
          >
          </v-textarea>
        </v-col>
      </v-row>
      <v-col cols="12">
        <h3>Requisitos</h3>
      </v-col>
      <v-divider></v-divider>
      <list-requirements :requirements="requirements"></list-requirements>
      <v-row class="justify-end mt-2 mr-3">
        <v-btn type="submit" :disabled="!formValid" class="primary" :loading="loading"> Salvar </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
