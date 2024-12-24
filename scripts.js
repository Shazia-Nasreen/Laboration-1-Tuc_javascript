
function getName() {
    let name = prompt("Vad heter du?");
    return name.toUpperCase();
}


function greetUser() {
    let name = getName(); 
    let nameLength = name.length; 
    alert(`Hej ${name}, visste du att ditt namn har ${nameLength} bokstäver?`);
}
