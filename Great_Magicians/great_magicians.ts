/* Great Magicians: Start with a copy of your program from Exercise 41 . Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
 show_magicians() to see that the list has actually been modified. */


 function make_great (magicians: string[]) {
    
    for(let i = 0; i < magicians.length; i++)

    {
        magicians[i] = magicians[i] + " the Great."
    }

  }
  
  function show_magicians(magicians: string[]) {
      
    for( const magician of magicians)

    {
        console.log(magician.charAt(0) + magician.slice(1));
    }

  }

  const magician: string[] = ["Seneorita", "Alexander", "Aristo"];
    
  make_great(magician);
  show_magicians(magician);

  
  
   