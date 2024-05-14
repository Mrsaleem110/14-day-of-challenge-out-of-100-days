// *Question 41:* Magicians: Display magician names from an array.
// *Explain & TIP:* Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
var Magicians = ['Devid', 'thomas', 'edision'];
function make_magician(Magicians) {
    Magicians.forEach(function (Magician) { console.log(Magician); });
}
make_magician(Magicians);
