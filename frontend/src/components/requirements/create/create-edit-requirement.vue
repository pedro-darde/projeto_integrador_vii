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
                <v-select
                  label="Prioridade"
                  required
                  outlined
                  dense
                  :items="priorityOptions"
                  item-text="text"
                  item-value="value"
                  v-model="requirement.priority"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Complexidade"
                  required
                  outlined
                  dense
                  :items="complexityOptions"
                  item-text="text"
                  item-value="value"
                  v-model="requirement.complexity"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  label="Tipo"
                  required
                  outlined
                  dense
                  :items="typeOptions"
                  item-text="text"
                  item-value="value"
                  v-model="requirement.type"
                ></v-select>
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
          <v-btn color="blue darken-1" text @click="save"> Salvar </v-btn>
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
    currentRequirement: {
      type: Object,
    },
  },
  data() {
    return {
      requirement: this.currentRequirement,
      complexityOptions: [
        { value: 0, text: "Baixo" },
        { value: 1, text: "Médio" },
        { value: 2, text: "Alta" },
      ],
      priorityOptions: [
        { value: 0, text: "Baixa" },
        { value: 1, text: "Média" },
        { value: 2, text: "Alta" },
        { value: 3, text: "Muito Alta" },
      ],
      typeOptions: [
        { value: 0, text: "Requisito Funcional (RF)" },
        { value: 1, text: "Requisito Não Funcional (RNF)" },
      ],
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
  watch: {
    dialog() {
      this.requirement = this.currentRequirement;
    },
  },
};
</script>

<style></style>
