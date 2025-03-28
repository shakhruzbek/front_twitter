const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    redirectToLogin();
  }
  
axios.post('http://localhost:4001/login')
 .then(res => {
    localStorage.setItem('token', res.data.token);
    window.location.href = './html/main.html';
  })
  .catch(err => {
    console.error(err);
    localStorage.removeItem('token');
    redirectToLogin();
  });
