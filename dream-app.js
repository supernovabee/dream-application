
const readline = require('readline-sync'); //I want the user to be able to pick a type of candy to hand to the NPC (Values,Data Types, and Operations)

let inventory = [
    ["keys", "chocolate", "gummy bears"],                       //a nested Array is used as an inventory (Building Arrays)

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