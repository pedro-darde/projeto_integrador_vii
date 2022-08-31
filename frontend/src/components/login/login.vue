<template>
  <v-content>
    <v-container fluid fill-height class="main-container">
      <v-layout align-center justify-center>
        <v-flex xs8 sm8 md4>
          <h3>Seja bem vindo</h3>
          <div class="d-flex">
            <v-img
              alt="Logo"
              class="img"
              contain
              :src="logo"
              transition="scale-transition"
            />
          </div>

          <form ref="form" @submit.prevent="login()">
            <v-text-field
              v-model="email"
              name="email"
              label="E-mail"
              type="text"
              placeholder="username"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              name="password"
              label="Password"
              type="password"
              placeholder="password"
              required
            ></v-text-field>
            <v-btn type="submit" class="mt-4" color="primary" value="log in"
              >Login</v-btn
            >
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    logo: require("../../assets/logotipo1.png"),
    email: "",
    emailRules: [
      (v) => !!v || "Informe um e-mail válido.",
      (v) => /.+@.+\..+/.test(v) || "Informe um e-mail válido.",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Informe uma senha."],
    select: null,
    checkbox: false,
  }),

  methods: {
    login() {
      this.$emit("handleLogin", { email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss" scoped src="./styles.scss">
</style>