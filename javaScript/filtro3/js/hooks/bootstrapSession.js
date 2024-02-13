(() => {
  const isAuthorized = localStorage.getItem("isAuthorized");
  const path = window.location.pathname;
  const routeActive = path.substring(path.lastIndexOf("/") + 1);
  const privateRoutes = ["administrator.html"];

  if (privateRoutes.includes(routeActive) && !isAuthorized) {
    window.location.href = "index.html";
  }
})();
