const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  //Provide an event object as an argument
  event.preventDefault();
  //Prevents the default action.
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// JS calls onLoginSubmit function when submit event occurs
