import App from "./App.svelte";
import "./assets/scss/common.scss";

const app = new App({
  //target: document.body,
  target: document.getElementById("app"),
  props: {
    name: "world",
  },
});

export default app;
