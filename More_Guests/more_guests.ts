/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger
 dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 

• Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your list.

        {**********************************************************************}  */


//TASK # 01

let guestArray: string [] = ["Sir Zia", "Miss Afsari", "Miss Farhat"]; 

guestArray.map((items) => 
console.log(`Dear ${items}, I found a bigger dinner table so I'm invited more peoples in the dinner.`)
);

//TASK # 02

let beginingGuest: string = "Sir Shan";
guestArray.unshift(beginingGuest);
console.log(guestArray);

//TASK # 03

let middleGuest: string = "Sir Zakir Ali";
let midElement = guestArray.length / 2;
guestArray.splice(midElement, 0, middleGuest);
console.log(guestArray);

//TASK # 04

let endingGuest: string = "Sir Arsalan";
guestArray.push(endingGuest);
console.log(guestArray);

//TASK # 05

guestArray.map((items) => {

const message: string = `Assalam-o-Alaikum \n Dear ${items}, \n \t You are invited in the more people list on the dinner.`

console.log(message)

}
);

