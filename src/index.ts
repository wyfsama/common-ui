import type { App } from "vue";
import * as components from "./components/index";

export const UIInstall = {
  install(app: App) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
  },
};
