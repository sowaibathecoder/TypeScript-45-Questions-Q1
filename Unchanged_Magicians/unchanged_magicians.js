/* Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of
  the array of magicians’ names. Because the original array will be unchanged, return the new array and store
  it in a separate array. Call show_magicians() with each array to show that you have one array of the original
  names and one array with the Great added to each magician’s name.  */
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push(magician[i] + ' the Great.');
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0) + magician_1.slice(1));
    }
}
var magician = ["Seneorita", "Alexander", "Aristo"];
var great_magicians = make_great(magician);
show_magicians(magician);
show_magicians(great_magicians);
