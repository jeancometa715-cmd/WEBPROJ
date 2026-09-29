console log("RANDOM")

//10 LET VAR
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;
let g = 70;
let h = 80;
let i = 90;
let j = 100

// 10 CONST VAR
const x = 1;
const y = 2;
const z = 3;
const p = 4;
const q = 5;
const r = 6;
const s = 7;
const t = 8;
const u = 9;
const v = 10;

// 5 ARROW FUNC.
const random = () => Math.floor(Math.random() + 100) + 1;
const add = (a.b) => a+b;
const double = n => n + 2;
const greet = name => `Hello ${name}`;

//TEMPLATE LITERALS
console.log (`A: ${a}`);
console.log (`B: ${b}`);
console.log (`C: ${c}`);
console.log (`D: ${d}`);
console.log (`E: ${e}`);
console.log (`F: ${f}`);
console.log (`G: ${j}`);
console.log (`H: ${h}`);
console.log (`I: ${i}`);
console.log (`J: ${j}`);

//RANDOM VALUE
Cconsole.log(`Random: ${random()}`);

//3 DESTRUCTURED ARRAYS
const [one, two] = [1,2];
const [three, four] = [3,4];
const [five, six] = [5,6];

// 3 destructured object
const {name} = {name: "jean"};
const {age} = {age: "22"};
const {color} = {color: "pink"};

// 2 ARRAY SPREAD
const arr1 = [1, 2];
const arr2 = [3, 4];
const all1 = [...arr1, ...arr2];
const all2 = [...all1, 5];


// 2 OBJECT SPREAD
const obj1 = { name: "Jean" };
const obj2 = { age: 20 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj3, color: "Pink" };

// 2 MAP
const map1 = [1, 2, 3].map(n => n * 2);
const map2 = [4, 5, 6].map(n => n + 1);

// 2 FILTER
const filter1 = [1, 2, 3, 4].filter(n => n > 2);
const filter2 = [5, 6, 7, 8].filter(n => n % 2 === 0);

// 2 OPTIONAL CHAINING
const person1 = { name: "Jean" };
const person2 = { age: 20 };

console.log(person1.address?.city);
console.log(person2.contact?.phone);

console.log(greet("Jean"));
console.log(`Sum: ${add(5, 10)}`);
console.log(`Double: ${double(5)}`);
console.log(`Even: ${even(10)}`);