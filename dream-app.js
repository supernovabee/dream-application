
const readline = require('readline-sync'); //I want the user to be able to pick a type of candy to hand to the NPC (Values,Data Types, and Operations)

let inventory = [
    ["keys", "chocolate", "gummy bears"],                       //a nested Array is used as an inventory (Building Arrays, Using Arrays)

    ["breath mints", "loose change", "wallet"]
];

console.log(inventory);       //displays nested array as inventory list. 

let item = readline.question ("What do you want to give to Nova?")

if (item = chocolate) {                                                    //this if/else statement also includes a boolean to see if chocolate was chosen. You get a positive statement if it was, and a 
  console.log("Chocolate? That's my favorite food! How'd you know?");                     // disappointed one if it wasn't. (Control Structures and Logic, )
} 
    else {
  console.log("Oh...I guess that's okay too");
}


for (let day = 0; day > 12; day++) {                //a loop to calculate when night switches to day. (Working with loops)
  console.log("It's nighttime")
};




if (String.length >= 10) {                                                    //this if/else statement compares a user-inputed string's length to 10 to determine if the NPC likes the name or not
  console.log("That sounds like a great name for our project!");                     // (Stringing Characters together)
} 
    else {
  console.log("Mmmm, I don't know, I think its missing something");
};


//This isn't yet working code, a bit of pseudocode so I can get my thought process and ideas on paper.
//I know these most likely won't work and have a bunch of syntax errors but they provide a framework for me to reference
//when making my game!