function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
    //firstNumber = 2 secondNumber = 3
}

function divide (a,b){
    console.log(a/b);
    // a = 80 b = 25
}

plus(2 , 3);
divide(80,25);

const player = {
    name: "min sung",
    sayHello : function(otherPersonName){
        console.log("Hello " + otherPersonName + " nice to meet you!");
    }
};

console.log(player.name);
player.sayHello("Lee");
player.sayHello("min");

