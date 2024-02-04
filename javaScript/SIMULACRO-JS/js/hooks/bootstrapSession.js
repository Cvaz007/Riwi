(() => {
  //Get the user section of localStorage
  const isAuthorized = localStorage.getItem("isAuthorized");
  //Get the route where the user wants to access
  const path = window.location.pathname;
  //Cut the path for allow just the file that user is trying to access
  const routeActive = path.substring(path.lastIndexOf("/" )+ 1);
  console.log(routeActive);
  //Create a list with the name of all list that I want protect
  const privateRoutes = ["administrator.html"];
  
  if (privateRoutes.includes(routeActive)  && !isAuthorized) {
    window.location.href = "../index.html";
  }
})();
