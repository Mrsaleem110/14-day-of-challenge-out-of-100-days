// *Question 42:* Great Magicians: Add "the Great" to magician names.
// *Explain & TIP:* Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
// let Magicians :string[]=['Devid','thomas','edision'];
// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
//     function make_magician(Magicians:string[]){
//         Magicians.forEach(Magician=>{console.log(Magician)})
//     }
//     make_magician(Magicians)
// }
// make_great(magicians); // Modifies the original array
var magicians = ['Devid', 'thomas', 'edision'];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
    console.log(magicians);
}
make_great(magicians);
// Modifies the original array
//show_magicians(magicians); // Shows modified names
