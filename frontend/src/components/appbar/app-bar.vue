<template>
  <div>
    <v-app-bar color="primary accent-4">
      <div class="d-flex">
        <v-img
          alt="Logo"
          contain
          :src="logo"
          transition="scale-transition"
          width="200"
        />
      </div>
      <v-toolbar-title class="font-white bold ps-2 text-center">
        Gestor de Projetos
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="primary" @click="goToProjetos"> Projetos </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      disable-resize-watcher="false"
      :hide-overlay="true"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          v-for="link in links"
          :key="link.title"
        >
          <v-list-item link :to="link.to">
            <v-icon class="mr-2"> {{ link.icon }}</v-icon>

            {{ link.title }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script src="./script.js"></script>
<style lang="scss" scoped src="./styles.scss"></style>