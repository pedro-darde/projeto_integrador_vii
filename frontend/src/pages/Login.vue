<template>
  <login @handleLogin="login"> Login </login>
</template>

<script>
import isLoggedIn from "../helpers/isLoggedIn";
export default {
  methods: {
    login(payload) {
      localStorage.setItem("token", JSON.stringify(payload));
      this.$router.push("/");
    },
  },
  mounted() {
    if (isLoggedIn()) this.$router.push("/");
  },
};
</script>

<style>
</style>