const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    redirectToLogin();
  }
  


