const calculator = {
    add : function(a,b) {
         a+b;
    },
    minus : function(a,b) {
        return a-b;
    },
    div : function(a,b) {
        return a/b;
    },
    pow : function(a,b) {
        return a**b;
    }

};

const addResult = calculator.add(10,4);
const minusResult = calculator.minus(addResult,2);
const divResult = calculator.div(minusResult,2);
const powResult = calculator.pow(divResult,2);

console.log(calculator.add(2,2));
// console.log(addResult);
// console.log(minusResult);
// console.log(divResult);
// console.log(powResult);