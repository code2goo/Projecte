//Verzweigungen

var Zahl1 = 30;

if (Zahl1 > 20) {
  console.log("Zahl1 ist größer als 20.");
} else {
  console.log("Zahl1 ist kleiner als 20.");
}

var Zahl2;

if (Zahl2) {
  console.log("Zahl2 ist nicht leer.");
} else {
  console.log("Zahl2 ist leer.");
}

var Zahl3 = 0;

if (true) {
  console.log("Zahl3 ist nicht leer.");
} else {
  console.log("Zahl3 ist leer.");
}

////////////////////////////

var Zahl4 = prompt("Bitte gib eine Zahl ein.");

if (Zahl4 > 50) {
  console.log("Der eingegebene Wert ist größer als 50.");
} else {
  console.log("Der eingegebene Wert ist kleiner oder gleich 50.");
}


if (Zahl4 >= 0 && Zahl4 <= 100) {
  console.log("Zahl4 liegt zwischen 0 und 100.");
} else {
  console.log("Zahl4 liegt NICHT zwischen 0 und 100.");
}


var Zahl5;

if (Zahl4 + 10 > 10) {
  Zahl5 = Zahl4 / 3;
  console.log(Zahl5);
} else {
  Zahl5 = Zahl4 * 2;
  console.log(Zahl5);
}

//Switch-Case
console.log(Zahl4);
console.log(typeof Zahl4);

switch (Zahl4) {
  case "Hund":
    console.log("Zahl4 ist 0.");
  	break;
  case "Katze":
    console.log("Zahl4 ist 1");
    break;
  case "Vogel":
    console.log("Zahl4 ist 2");
    break;
  default:
    console.log("Zahl4 ist weder 0, 1 oder 2.");
}

















