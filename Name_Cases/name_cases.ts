/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
 uppercase, and titlecase. */


const myName : string = "Sowaiba Naz";
console.log("lowercase:" , myName.toLowerCase());
console.log("uppercase:" , myName.toUpperCase());
console.log("titlecase:" , myName.replace(/\b\w/g,c=>c.toUpperCase()));