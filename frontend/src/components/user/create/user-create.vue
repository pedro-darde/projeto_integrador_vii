<template>
  <v-container fluid>
    <v-form v-model="formValid" @submit.prevent="create">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            label="Nome"
            outlined
            :rules="nameRules"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="email"
            label="E-mail"
            outlined
            :rules="emailRules"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            type="password"
            v-model="password"
            label="Senha"
            outlined
            dense
            :rules="passwordRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="confirmPassword"
            label="Confirme a senha"
            outlined
            type="password"
            :rules="confirmPasswordRules"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" v-if="onList">
          <v-select
            :items="profileOptions"
            label="Perfil"
            required
            outlined
            dense
            item-text="text"
            item-value="value"
            v-model="profile"
          >
          </v-select>
        </v-col>
        <v-btn :disabled="!formValid" type="submit" :loading="loading">
          Salvar
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
