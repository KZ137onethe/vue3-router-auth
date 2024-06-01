import { createApp } from 'vue';
import App from './App.vue';
import store from "./store";
import router from "./router";
import routerBeforeEach from "./router/route";

routerBeforeEach(router, store)

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
