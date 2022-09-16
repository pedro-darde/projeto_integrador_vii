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
              dense>
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              v-model="user.email"
              label="E-mail"
              outlined
              :rules="emailRules"
              dense>
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select :items="profileOptions" label="Perfil"
                    required
                    outlined
                    dense
                    item-text="text"
                    item-value="value"
                    v-model="user.profile"
          >
          </v-select>
        </v-col>
        <v-btn :disabled="!formValid" type="submit"> Salvar</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script src="./script.js">

</script>

<style scoped lang="scss" src="./styles.scss">

</style>