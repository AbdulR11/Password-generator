const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passLength = 15;
let btn = document.getElementById("generate-btn");
let pass1 = document.getElementById("password-1");
let pass2 = document.getElementById("password-2");

function generate() {
    let pass = "";
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
    return pass;
}

function generatePasswords() {
    pass1.textContent = generate();
    pass2.textContent = generate();
}


btn.addEventListener("click", generatePasswords);

