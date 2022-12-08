<template>
  <div class="text-center">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>
