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
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    square: function(a,b){
        console.log(a**b)
    }
}
calculator.add(3,4);
calculator.minus(3,4);
calculator.divide(3,4);
calculator.square(3,4);
