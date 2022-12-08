import tokenMixin from "@/mixins/token-mixin";
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from "tiptap-vuetify";

export default {
  mixins: [tokenMixin],
  props: {
    value: {
      type: Boolean,
    },
    currentRequirement: {
      type: Object,
    },
  },
  components: { TiptapVuetify },
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
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
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
    dontHavePermission() {
      const token = this.getToken();
      return token && token.profile !== "ADMIN";
    },
    isEdit() {
      return this.requirement.hasOwnProperty("id");
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
      this.$emit("close");
    },
  },
};
