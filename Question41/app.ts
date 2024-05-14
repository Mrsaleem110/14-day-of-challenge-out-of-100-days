
// *Question 41:* Magicians: Display magician names from an array.

// *Explain & TIP:* Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
let Magicians :string[]=['Devid','thomas','edision'];
function make_magician(Magicians:string[]){
    Magicians.forEach(Magician=>{console.log(Magician)})
}
make_magician(Magicians)