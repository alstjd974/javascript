const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleTitleMouseenter() {
  h1.innerText = "Mouse is here!";
}

function handleTitleMouseLeave() {
  h1.innerText = "Mouse is gone~";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleTitleMouseenter);
h1.addEventListener("mouseleave", handleTitleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
