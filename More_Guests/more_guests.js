/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger
 dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list.

        {**********************************************************************}  */
//TASK # 01
var guestArray = ["Sir Zia", "Miss Afsari", "Miss Farhat"];
guestArray.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so I'm invited more peoples in the dinner."));
});
//TASK # 02
var beginingGuest = "Sir Shan";
guestArray.unshift(beginingGuest);
console.log(guestArray);
//TASK # 03
var middleGuest = "Sir Zakir Ali";
var midElement = guestArray.length / 2;
guestArray.splice(midElement, 0, middleGuest);
console.log(guestArray);
//TASK # 04
var endingGuest = "Sir Arsalan";
guestArray.push(endingGuest);
console.log(guestArray);
//TASK # 05
guestArray.map(function (items) {
    var message = "Assalam-o-Alaikum \n Dear ".concat(items, ", \n \t You are invited in the more people list on the dinner.");
    console.log(message);
});
