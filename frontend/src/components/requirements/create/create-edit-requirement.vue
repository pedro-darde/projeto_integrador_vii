<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Criar Requisito</span>
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
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Descrição"
                  outlined
                  dense
                  v-model="requirement.description"
                ></v-textarea>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Prioridade"
                  required
                  outlined
                  dense
                  v-model="requirement.priority"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Complexidade"
                  required
                  outlined
                  dense
                  v-model="requirement.complexity"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Tipo"
                  required
                  outlined
                  dense
                  v-model="requirement.type"
                ></v-text-field>
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
          <v-btn color="blue darken-1" text @click="save">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {
      requirement: {
        name: "",
        description: "",
        complexity: "",
        priority: "",
        version: 1,
        type: "",
      },
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    save() {
      this.$emit("save", this.requirement);
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>