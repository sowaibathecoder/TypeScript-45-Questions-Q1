/* Animals: Think of at least three different animals that have a common characteristic. Store the names of
   these animals in a list, and then use a for loop to print out the name of each animal.

 • Modify your program to print a statement about each animal, such as A dog would make a great pet.

 • Add a line at the end of your program stating what these animals have in common. You could print a sentence
   such as Any of these animals would make a great pet! 
   
              {*****************************************************}   */

//TASK # 01

let animals: string [] = ["Dog", "Cat", "Horse"];

for (let animal of animals){
    console.log(animal)
}

// TASK # 02

for (let animal of animals){
    console.log(`A ${animal.toLowerCase()} would make a great pet.`)
}

// TASK # 03

console.log("Any of these animals would make a great pet! \nAnd these animals are also faithful.\nEspaicially dog and horse.")

