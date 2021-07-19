import {
    createApp
} from "vue";
import App from "./App.vue";
import store from "./assets/store"
import router from "./router";
// import Login from "./components/Login.vue";

createApp(App).use(router).use(store).mount("#app");