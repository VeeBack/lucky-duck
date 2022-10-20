import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createI18n } from "vue-i18n";
import messages from "./translations";

console.log(messages);

const i18n = createI18n({
  locale: "sv",
  fallbackLocale: "sv",
  globalInjection: true,
  legacy: false,
  messages,
});

createApp(App).use(i18n).use(store).mount("#app");
