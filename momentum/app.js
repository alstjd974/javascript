const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title = document.getElementsByTagName("h1");
console.log(title);

const title2 = document.querySelector(".hello h1");
title2.innerText = "hello";
console.log(title2);

const title3 = document.querySelectorAll(".hello h1");
console.log(title3);
