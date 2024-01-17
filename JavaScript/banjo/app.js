function banjo(name){
    if (name[0] == "R" || name[0] == "r") {
        return name + " plays banjo"
    }else { 
        return name + " does not play banjo";
    }
}
// console.log(banjo("Ropert"))


// OR

function playBanjo(name){
   return (name[0].toLowerCase() == "r") ? name + "Play banjo" : name + " does not play banjo";
}

console.log(playBanjo("sopert"))
