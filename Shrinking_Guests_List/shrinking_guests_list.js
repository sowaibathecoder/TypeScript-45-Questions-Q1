/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
  two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
  from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.
 
         {*******************************************************}  */
//TASK # 01
var guests = ["Sir Shan", "Sir Zia", "Sir Zakir Ali", "Miss Afsari", "Miss Farhat", "Sir Arsalan"];
console.log("Due to limited space, only two guests can be invited for dinner.");
//TASK # 02
while (guests.length > 2) {
    var removedGuests = guests.pop();
    console.log("Sorry, Dear ".concat(removedGuests, ", Due to limited space, you can't invite for the dinner."));
}
;
//TASK # 03
guests.forEach(function (guest) {
    return console.log("Assalam-o-Alaikum \n Dear ".concat(guest, ", \n \t You are still invited for the dinner."));
});
//TASK # 04
guests.pop();
guests.pop();
console.log(guests);
