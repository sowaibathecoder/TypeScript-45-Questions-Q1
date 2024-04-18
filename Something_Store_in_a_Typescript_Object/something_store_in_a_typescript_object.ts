/* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing
   these items. */

// OBJECT 01

const govInitiativeStudent = {
    Student_Name: "Sowaiba Naz",
    Roll_No: "00490877",
    Center: "Governor House Karachi",
    Days_Timing: "Thursday - 07:00 PM to 10:00 PM"
};

console.log(govInitiativeStudent);

//OBJECT 02

let machine: {PC_Name: string, Windows: number, Processor: string, System_Type: string} = 
             {PC_Name: "DELL", Windows: 10, Processor: "Intel(R) Core(TM) i5-4670 CPU @ 3.40GHz", System_Type: "64-bit Operating System"}

console.log(machine);             