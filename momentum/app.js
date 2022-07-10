const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleTitleMouseenter() {
  title.innerText = "Mouse is here!";
}

function handleTitleMouseLeave() {
  title.innerText = "Mouse is gone~";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleMouseenter);
title.addEventListener("mouseleave", handleTitleMouseLeave);
