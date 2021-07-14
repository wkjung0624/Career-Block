import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
// import Login from "./components/Login.vue";

createApp(App).use(router).mount("#app");