<template>
  <v-container fluid>
    <v-form v-model="formValid" @submit.prevent="save">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="user.name"
            label="Nome"
            outlined
            :rules="nameRules"
            :disabled="dontHavePermission"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="user.email"
            label="E-mail"
            outlined
            :rules="emailRules"
            :disabled="dontHavePermission"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select
            :items="profileOptions"
            label="Perfil"
            :disabled="dontHavePermission"
            required
            outlined
            dense
            item-text="text"
            item-value="value"
            v-model="user.profile"
          >
          </v-select>
        </v-col>
        <v-btn :disabled="!formValid || dontHavePermission" type="submit" :loading="loading">
          Salvar</v-btn
        >
        <v-btn
          v-if="dontHavePermission"
          type="button"
          class="btn"
          color="error"
          @click="back"
        >
          Voltar
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
