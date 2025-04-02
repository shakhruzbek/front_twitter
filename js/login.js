
 
function loginUser() {
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;

  if (!username || !password) {
    alert("Iltimos, username va parolni kiriting!");
    // return;
  }

  axios
    .post("http://localhost:4001/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      const { user, token } = res.data; 
      console.log(user);
      

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      window.location.href = "./html/main.html";
    })
    .catch((err) => {
      console.log(err);
      alert("Login yoki parol xato!");
    });
}


document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  loginUser();
});