import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import "@/assets/base.css";
import antd from "ant-design-vue";
import miniToastr from "mini-toastr";

miniToastr.init({
  timeout: 1000,
});

const app = createApp(App);

app.use(router);
app.use(antd);

app.mount("#app");
