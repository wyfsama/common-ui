import { createApp } from "vue";
import App from "./App.vue";
import { UIInstall } from "../index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(UIInstall).use(ElementPlus).mount("#app");
