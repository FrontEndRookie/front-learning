/// <reference types="vite/client" />
import mitt from "mitt";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
const Mit = mitt();

type addNum = {
  addWord: <T>(str: T) => string;
};
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
    $addNum: addNum;
  }
}
