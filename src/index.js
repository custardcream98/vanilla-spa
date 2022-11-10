import App from "./app.js";
import { navigate } from "./utils/navigate.js";
import { $ } from "./utils/querySelector.js";

window.addEventListener("DOMContentLoaded", (e) => {
  new App($("#app"));
});
