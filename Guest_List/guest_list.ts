/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
 list that includes at least three people you’d like to invite to dinner. Then use your list to print
 a message to each person, inviting them to dinner. */

 
let guestArray: string [] = ["Sir Zia", "Madam Rubina", "Miss Farhat"]; 

guestArray.map((items) => {
    const message: string = `Assalam-o-Alaikum \n Dear ${items}, \n \t You are invited to the dinner.`

    console.log(message)
}
);