<template>
  <v-row justify="center" class="CreateEditRequirement">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <v-row class="d-flex flex-column pa-2">
            <span class="text-h5"
              >{{ isEdit ? "Editar" : "Criar" }} Requisito</span
            >
            <span v-if="!requirement.active" class="inactive-span">
              Requisito inativo, apenas visualização!
            </span>
            <span v-if="dontHavePermission"> Modo visualização </span>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  required
                  outlined
                  dense
                  v-model="requirement.name"
                  :disabled="!requirement.active || dontHavePermission"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <tiptap-vuetify
                  placeholder="Escreva aqui a descrição do requisito"
                  v-model="requirement.description"
                  :extensions="extensions"
                  outlined
                  dense
                  :disabled="!requirement.active || dontHavePermission"
                />
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Prioridade"
                  required
                  outlined
                  dense
                  :items="priorityOptions"
                  item-text="text"
                  item-value="value"
                  v-model="requirement.priority"
                  :disabled="!requirement.active || dontHavePermission"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Complexidade"
                  required
                  outlined
                  dense
                  :items="complexityOptions"
                  item-text="text"
                  item-value="value"
                  v-model="requirement.complexity"
                  :disabled="!requirement.active || dontHavePermission"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Tipo"
                  required
                  outlined
                  dense
                  :items="typeOptions"
                  item-text="text"
                  item-value="value"
                  v-model="requirement.type"
                  :disabled="!requirement.active || dontHavePermission"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Versão"
                  outlined
                  readonly
                  v-model="requirement.version"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Sair
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
            :disabled="!requirement.active || dontHavePermission"
          >
            Salvar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./styles.scss"></style>
