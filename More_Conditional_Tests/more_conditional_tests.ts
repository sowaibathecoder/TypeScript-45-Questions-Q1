/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
  more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
 and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 
          {********************************************************}   */


// TEST # 01 

let name_1: string = "Sowaiba";
let name_2: string = "Sowaiba Naz";

console.log("Equality with strings: ", name_1 == name_2);

console.log("Inequality with strings: ", name_2 != name_1);

// TEST # 02

let subject_1: string = "Islamiat";
let subject_2: string = "English";

console.log("Lower Case Function: ", subject_1.toLowerCase() === subject_2.toLowerCase());

console.log("Lower Case Function: ", subject_2.toLowerCase() !== subject_1.toLowerCase());

// TEST # 03

let numericalTest_1: number = 13;
let numericalTest_2: number = 23;

console.log("Numerical equality: ", numericalTest_1 == numericalTest_2);
console.log("Numerical inequality: ", numericalTest_1 != numericalTest_2);
console.log("Numerical greater than: ", numericalTest_2 > numericalTest_1);
console.log("Numerical less than: ", numericalTest_2 < numericalTest_1);
console.log("Numerical greater than or equal to: ", numericalTest_2 >= numericalTest_1);
console.log("Numerical less than or equal to: ", numericalTest_2 <= numericalTest_1);

// TEST # 04

let a: number = 10;
let b: number = 20;
let c: number = 30;

console.log("Using 'AND' operator: ", a != b && b < c);
console.log("Using 'OR' operator: ", b < a || c == a);

// TEST # 05, 06

let pens: string [] = ["fountain pen", "gel pen", "ball point", "glitters pen"];

console.log("Items is in a array: ", pens.includes("fountain pen"));
console.log("Items is not in a array: ", pens.includes("marker"));


/* meray is code mein koi error nahi hy but mujhy yeh samajh nahi aarahi hy k "tsc" run karny k baad yeh 
   error kyun show kar raha hy lekin mein us hi error mai "node" ko run kar rahi hu to correct result to
   show ho ja raha hy but wo error kyun aaraha hy , I don't know. */

