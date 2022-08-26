<template>
  <home> </home>
</template>

<script>
import isLoggedIn from "../helpers/isLoggedIn";
export default {
  mounted() {
    console.log('aq')
    if (!isLoggedIn()) this.$router.push("/login");
  },
};
</script>

<style>
</style>