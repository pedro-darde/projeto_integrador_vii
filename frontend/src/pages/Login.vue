<template>
  <login @handleLogin="login"> Login </login>
</template>

<script>
export default {
  methods: {
    login(payload) {
      localStorage.setItem('token', JSON.stringify(payload))
      this.$router.push("/")
    },
  },
};
</script>

<style>
</style>