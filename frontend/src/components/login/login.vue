<template>
  <v-content>
    <v-container fluid fill-height class="main-container">
      <v-layout align-center justify-center>
        <v-flex xs8 sm8 md4>
          <h3 class="text-center">Seja bem vindo</h3>
          <div class="d-flex mb-3">
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
              outlined
              dense
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              v-model="password"
              name="password"
              label="Password"
              type="password"
              placeholder="password"
              required
              outlined
              :rules="passwordRules"
              dense
            ></v-text-field>

            <v-row class="d-flex flex-column">
              <v-btn type="submit" class="mt-4 btn-login" color="primary" value="log in"
              >Login</v-btn
              >
              <a href="/usuario/criar" class="mt-2">
                Ainda não possui conta ? Registre-se
              </a>
            </v-row>
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
  .btn-login {
    width: 85%!important;
  }
</style>