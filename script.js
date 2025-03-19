function firstWord(s) {
    return s.trim().split(" ")[0]; 
}

const s = prompt("Enter String:");
alert(firstWord(s));