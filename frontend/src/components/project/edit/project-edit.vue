<template>
  <v-container fluid>
    <v-form v-model="formValid" @submit.prevent="edit">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="project.name"
            label="Nome"
            outlined
            dense
            :rules="nameRules"
            :disabled="dontHavePermission"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <datepicker
            v-model="project.startDate"
            label="Data de Início"
            :disabled="dontHavePermission"
          ></datepicker>
        </v-col>
        <v-col cols="6" md="2">
          <datepicker
            v-model="project.endDate"
            label="Data de Fim"
            type="date"
            :disabled="dontHavePermission"
          >
          </datepicker>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="project.created_by"
            label="Responsável"
            outlined
            dense
            :disabled="dontHavePermission"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="project.description"
            label="Sobre o Projeto"
            rows="3"
            outlined
            dense
            :rules="aboutRules"
            :disabled="dontHavePermission"
          >
          </v-textarea>
        </v-col>
      </v-row>
      <v-col cols="12">
        <h3>Requisitos</h3>
      </v-col>
      <v-divider></v-divider>
      <list-requirements
        :requirements="requirements"
        @changeRequirements="onChangeOnlyActive()"
        :onlyActive="onlyActiveReqs"
      ></list-requirements>
      <v-row class="justify-end mt-2 mr-3">
        <v-btn class="mr-2" href="/projetos"> Voltar </v-btn>
        <v-btn
          :loading="loading"
          type="submit"
          :disabled="!formValid || dontHavePermission"
          class="primary"
        >
          Salvar
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
