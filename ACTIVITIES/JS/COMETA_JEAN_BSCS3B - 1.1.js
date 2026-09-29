console.log ("Situation")
let name = "jean";
let age = 22;
let situation = "eating";

//3 arrays
const food = [rice, inasal, spag];
const drink = [Water, icetea, coke];
const place = [house, School, foodcourt];

//3 conditions
if (age >= 18) {
    console.log("You are an adult.");
}

if (situation === "eating") {
    console.log(name + " is eating.");
}

if (name === "jean") {
    console.log("Hello Jean!");
}

// 3 Loops
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

let i = 0;
while (i < drinks.length) {
    console.log(drinks[i]);
    i++;
}

for (const place of places) {
    console.log(place);
}