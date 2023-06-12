const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun"); 
console.log(daysOfWeek);

const player = {
    name: "Jay",
    points : 10,
    fat : false,
};
console.log(player);
player.fat = true;
player.lastName = "potato";
console.log(player);
player.points = player.points + 10;
console.log(player.points);

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I am " + age + "year's old.");
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 25);

function plus(a, b){
    console.log(a + b);
}
plus(3, 5);

function divide(a, b){
    console.log(a/b);
}
divide(40, 5);

const players = {
    name:"nico",
    sayHello: function (otherPersonsName) {
        console.log("Hello " + otherPersonsName + " nice to meet you!");
    },
}
console.log(players.name);
players.sayHello("lynn");
players.name = "Jay";
console.log(players)

const calculator = {
    add: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    divide: function(a,b){
        return a / b;
    },
    square: function(a,b){
        return a**b;
    }
};
const addResult = calculator.add(3,4);
calculator.minus(3,4);
calculator.divide(3,4);
calculator.square(3,4);
console.log(addResult);

const minusResult = calculator.minus(addResult, 3);
const divideResult = calculator.divide(10, minusResult);
const squareResult = calculator.square(divideResult,minusResult);

const age = 96;
function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const krAge = calculatorKrAge(age) ;
console.log(krAge);

const ageCalculator = parseInt(prompt("How old are you?"));
if(isNaN(ageCalculator) || ageCalculator < 0) {
    console.log("Please write a real positive number.");
} else if (ageCalculator < 18) {
    console.log("You are too young.");
} else if (ageCalculator >= 18 && ageCalculator <= 50) {
    console.log("You can drink.");
} else {
    console.log("You should be careful.");
}
