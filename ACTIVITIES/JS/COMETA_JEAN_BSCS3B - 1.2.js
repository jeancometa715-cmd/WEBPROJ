console.log("My Information");

let name = "jean";
let age = 22;
let situation = "eating";

// 3 Arrays
const foods = ["Rice", "Chicken", "Egg"];
const colors = ["Pink", "Blue", "Red"];
const hobbies = ["Coding", "Reading", "Gaming"];

// 4 Classes
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    introduce() {
        return `My name is ${this.#name}.`;
    }
}

class Student extends Person {
    study() {
        return `${this.introduce()} I am studying.`;
    }
}

class Teacher extends Person {
    teach() {
        return `${this.introduce()} I am teaching.`;
    }
}

class School {
    constructor(name) {
        this.name = name;
    }

    showSchool() {
        return `School: ${this.name}`;
    }
}

// 4 Objects
const person1 = new Person(name);
const student1 = new Student(name);
const teacher1 = new Teacher("Ronalyn");
const school1 = new School("NWSSU");

// 2 Object Literals
const studentInfo = {
    name: name,
    age: age
};

const dailyInfo = {
    situation: situation,
    hobby: "Coding"
};

// 3 Conditionals
if (age >= 18) {
    console.log("Adult");
}

if (situation === "eating") {
    console.log(`${name} is eating.`);
}

if (name === "jean") {
    console.log("Hello Jean!");
}

// 3 Loops
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (const hobby of hobbies) {
    console.log(hobby);
}

// 5 Methods
console.log(person1.introduce());
console.log(student1.study());
console.log(teacher1.teach());
console.log(school1.showSchool());
console.log(student1.introduce());

// Polymorphism
console.log(student1.introduce());
console.log(teacher1.introduce());