import {
    createApp
} from "vue";
import App from "./App.vue";
import store from "./assets/store"
import router from "./router";
import mixin from "./mixin";

createApp(App).use(router).use(store).mixin(mixin).mount("#app");