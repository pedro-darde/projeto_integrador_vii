import Vuetify from "vuetify";
import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import "tiptap-vuetify/dist/main.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  iconfont: "mdiSvg",
});

Vue.use(TiptapVuetifyPlugin, {
  vuetify,
  iconsGroup: "mdi",
});

export default vuetify;
