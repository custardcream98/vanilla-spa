const routes = [
  { path: /^\/$/, element: () => M },
  { path: /^\/post/, element: () => console.log("포스트페이지") },
  { path: /^\/shop$/, element: () => console.log("샵페이지") },
];

function Router($container) {
  this.$container = $container;

  const findMatchedRoute = () => routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    findMatchedRoute().element();
  };

  const init = () => {
    window.addEventListener("historychange", ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname) history.replaceState(null, "", to);
      else history.pushState(null, "", to);

      route();
    });

    window.addEventListener("popstate", () => {
      route();
    });
  };

  init();
  route();
}

export default Router;
