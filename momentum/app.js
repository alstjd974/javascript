const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtn() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name.");
  } else if (username.length > 15) {
    alert("your name is too long");
  } else {
    console.log("Hello", username);
  }
}

loginBtn.addEventListener("click", onLoginBtn);
