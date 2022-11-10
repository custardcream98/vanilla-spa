import Router from "./router/router.js";
import { navigate } from "./utils/navigate.js";
import { $ } from "./utils/querySelector.js";

function App($container) {
  this.$container = $container;

  $(".navbar").addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    const targetURL = e.target.href;
    navigate(targetURL);
  });

  this.init = () => {
    new Router($container);
  };

  this.init();
}

export default App;
