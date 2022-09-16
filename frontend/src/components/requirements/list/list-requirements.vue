<template>
  <v-container fluid>
    <v-row class="mt-2">
      <v-col cols="12 d-flex justify-end">
        <v-btn  @click.stop="open = true" v-if="!dontHavePermission"> Criar</v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table
            :headers="headers"
            :items="requirements"
            :items-per-page="5"
            class="elevation-1"
        >
          <template v-slot:item.active="{ item }">
            <span>{{ item.active ? 'Ativo' : 'Inativo' }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              {{ !dontHavePermission ? 'mdi-pencil' : 'mdi-eye' }}
            </v-icon>
            <v-icon small @click="deleteItem(item)" v-if="!dontHavePermission"> mdi-delete</v-icon>
          </template>
          <template v-slot:no-data> Sem itens</template>
        </v-data-table>
      </v-col>
    </v-row>
    <create-edit-requirement
        :currentRequirement="currentRequirement"
        v-model="open"
        @save="saveRequirement"
        @close="onCloseModalCreateEditRequirement"
    ></create-edit-requirement>
  </v-container>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
