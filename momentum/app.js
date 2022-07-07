const age = parseInt( prompt("How old are you") );


if(isNaN(age) || age < 0){
    console.log("please write a number");
}
else if(age < 20){
    console.log("you are too young");
}
else if(age >= 20 && age <= 50 ){
    console.log("you can drink");
}
else if(age > 50  && age <= 80){
    console.log("you should exercise");
}
else if(age > 80){
    console.log("you can do whatever you want.");
}