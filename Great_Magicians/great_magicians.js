/* Great Magicians: Start with a copy of your program from Exercise 41 . Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
 show_magicians() to see that the list has actually been modified. */
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great.";
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0) + magician_1.slice(1));
    }
}
var magician = ["Seneorita", "Alexander", "Aristo"];
make_great(magician);
show_magicians(magician);
