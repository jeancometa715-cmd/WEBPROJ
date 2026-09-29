console.log("FruitManagement");

let fruitCount = 6;
let targetFruit = "Mango";
let isRipe = true;
let discountRate = 0.2;

// Arrays
const tropicalFruit = ["Mango", "pineapple", "Banana"];
const citrusFruits = ["orange", "lemon", "lime"];
const berryfruits = ["strawberry", "Blueberry", "Grapes"];

const allFruits = [];

// Loop - Tropical Fruits
console.log("\n-- Tropical Fruits --");

for (let i = 0; i < tropicalFruit.length; i++) {
    console.log(i + 1 + ". " + tropicalFruit[i]);
}

// Loop - Citrus Fruits
console.log("\n-- Citrus Fruit --");

let c = 0;

while (c < citrusFruits.length) {
    console.log(c + 1 + ". " + citrusFruits[c]);
    c++;
}

// Loop - Berry Fruits
console.log("\n-- Berry Fruits --");

for (const berry of berryfruits) {
    console.log(berry);
    allFruits.push(berry);
}

// Conditional
console.log("\n-- Fruit Checks --");

if (targetFruit === "Mango" && isRipe) {
    console.log("Mango is Ripe & ready to eat!");
} else if (targetFruit === "Mango" && !isRipe) {
    console.log("Mango is not ripe yet.");
}

if (fruitCount > 5) {
    console.log("You have plenty of fruits!");
} else if (fruitCount === 5) {
    console.log("Exactly 5 fruitCount.");
} else {
    console.log("Need more fruit!");
}

if (allFruits.includes("Grapes")) {
    console.log("Grapes are in the list!");
} else {
    console.log("No Grapes found.");
}