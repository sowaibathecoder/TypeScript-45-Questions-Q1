/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
   that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
   is in your array, the if block should print a statement, such as You really like bananas!   */
var favorite_fruit = ["peach", "pomegranate", "orange"];
if (favorite_fruit.includes("peach")) {
    console.log("You really like peach!");
}
if (favorite_fruit.includes("pomegranate")) {
    console.log("You really like pomegranate!");
}
if (favorite_fruit.includes("orange")) {
    console.log("You really like orange!");
}
if (!favorite_fruit.includes("papaya")) {
    console.log("You don't like papaya!");
}
if (!favorite_fruit.includes("white grapefruit")) {
    console.log("You don't like white grapefruit!");
}
/* meray is code mein koi error nahi hy but mujhy yeh samajh nahi aarahi hy k "tsc" run karny k baad yeh
   error kyun show kar raha hy lekin mein us hi error mai "node" ko run kar rahi hu to correct result to
   show ho ja raha hy but wo error kyun aaraha hy , I don't know. */ 
