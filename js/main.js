const user = JSON.parse(localStorage.getItem("user"));

/// write user name and phot address
const userName = document.getElementById("username");
const userImage = document.getElementById("user-image");
const firstname = document.getElementById("firstname");

if (user) {
  userName.textContent = user.username;
  firstname.textContent = user.firstname;
}


    const postInput = document.getElementById("post-input");
    const postButton = document.getElementById("post-button");

    postButton.addEventListener("click", () => {
      const postText = postInput.value;
      if (postText) {
        axios
          .post("http://localhost:4005/post", {
            userId: user.id,
            text: postText,
          })
          .then((res) => {
            console.log(res.data);
            postInput.value = "";
          })
          .catch((err) => {
            console.error(err);
          });

      }
    });