const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   // window.location.href = "./html/main.html";
// }

function loginUser() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  axios
    .post(`http://localhost:4001/user/login`, {
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res.data);
      const { user, token } = res.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      window.location.href = `./html/main.html`;
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  loginUser();
});
