const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    redirectToLogin();
  }
  
axios.post('http://localhost:4001/login/id',{
 
})

