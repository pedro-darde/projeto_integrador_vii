<template>
  <login @handleLogin="login"> Login</login>
</template>

<script>
import isLoggedIn from "../helpers/isLoggedIn";
import { sessionService } from "@/services/session-service";
import swalMixin from "@/mixins/swal-mixin";

export default {
  mixins: [swalMixin],
  methods: {
    async login(payload) {
      let response;

      try {
        response = await sessionService.login(payload);
        this.$router.push("/");
      } catch (e) {
        if (e.response?.data) {
          this.toastError(e.response.data.message);
        }
      }
    },
  },
  mounted() {
    // console.log(isLoggedIn());
    // if (isLoggedIn()) this.$router.push("/");
  },
};
</script>

<style></style>
