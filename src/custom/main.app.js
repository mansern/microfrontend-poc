import singleSpaHtml from "single-spa-html";
import CustomComponent from "./custom.html";

const htmlLifecycles = singleSpaHtml({
  template: CustomComponent,
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;
