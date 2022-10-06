const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = [];


const lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let totalArray = []

function generate(){
    let letters = document.getElementById("letters")
    let numbers = document.getElementById("numbers")
    let special = document.getElementById("special")
    let length = document.getElementById("length").value
    totalArray = [];
    password1.innerText = null;
    password2.innerText = null;
    if(letters.checked === false && numbers.checked === false && special.checked === false){
        return 0;
    }
    if (letters.checked === true){
        totalArray.push(...lettersArray);
    }
    if (numbers.checked === true){
        totalArray.push(...numbersArray);
    }
    if (special.checked === true){
        totalArray.push(...symbolsArray);
    }
    if (length > 16){
        length = 16;
    } else if (length < 2){
        length = 2;
    }
    for (i = 0; i < length; i++){
        let character1 = Math.floor(Math.random() * totalArray.length);
        let character2 = Math.floor(Math.random() * totalArray.length);
        password1.innerText += totalArray[character1];
        password2.innerText += totalArray[character2];
    }
}
