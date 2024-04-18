/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
  should have one parameter that collects as many items as the function call provides, and it should print
  a summary of the sandwich that is being ordered. Call the function three times, using a different number
  of arguments each time. */


function sandwich(...items: string[]): string[]
{
   console.log("Add these following items to make a sandwich.")

   for (const item of items)
    {
      console.log("- " + item)
    }

    console.log("Your sandwich is ready, now enjoy it! :)  \n")

    return items;
}

sandwich("Chicken", "Tomato ketchup", "Capsicum", "Mayonees");

sandwich("Beef", "Onion", "Chilli garlic sauce");

sandwich("Neutella", "Strawberry jam");

