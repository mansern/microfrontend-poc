import { registerApplication, start } from "single-spa";

registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () => (location.pathname === "/react" ? false : true)
);

registerApplication(
  "react",
  () => import("./src/react/main.app.js"),
  () => (location.pathname === "/vue" ? false : true)
);

registerApplication(
  "custom",
  () => import("./src/custom/main.app.js"),
  () => location.pathname === "/"
);

start();
