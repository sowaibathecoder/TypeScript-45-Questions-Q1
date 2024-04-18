/* Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of
  the array of magicians’ names. Because the original array will be unchanged, return the new array and store
  it in a separate array. Call show_magicians() with each array to show that you have one array of the original
  names and one array with the Great added to each magician’s name.  */


  function make_great (magicians: string[]) { 
    
    const great_magicians: string[] = []
    
    for(let i = 0; i < magicians.length; i++)
    {
        great_magicians.push(magician[i] + ' the Great.')
    }

    return great_magicians;

  }

  function show_magicians(magicians: string[]) {

    for (const magician of magicians)
    {
        console.log(magician.charAt(0) + magician.slice(1))
    }
 }


  const magician: string[] = ["Seneorita", "Alexander", "Aristo"];

  const great_magicians: string[] = make_great(magician);

  show_magicians(magician);
  show_magicians(great_magicians);