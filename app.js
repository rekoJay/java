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