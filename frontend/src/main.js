import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

const files = require.context("./components", true, /\.vue$/i);
files.keys().map((key) => {
  Vue.component(key.split("/").pop().split(".")[0], files(key).default);
});

const filters = require.context("./filters", true, /\.js$/i);
filters
  .keys()
  .map((key) =>
    Vue.filter(key.split("/").pop().split(".")[0], filters(key).default)
  );

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "Home";
  });
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
