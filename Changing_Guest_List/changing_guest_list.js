/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

               {***************************************************}  */
//TASK # 01               
var guestArray = ["Sir Zia", "Madam Rubina", "Miss Farhat"];
var canNotAttend = "Madam Rubina";
console.log(canNotAttend + " due to some reason can't attend the dinner.");
//TASK # 02
var newGuest = "Miss Afsari";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
//TASK # 03
guestArray.map(function (items) {
    var message = "Assalam-o-Alaikum \n Dear ".concat(items, ", \n \t You are invited to the dinner.");
    console.log(message);
});
