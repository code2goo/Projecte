//Funktionen

einfach();


function einfach() {
  console.log("Hallo Welt!");
}


einfach();


function summe(parameter1, parameter2) {
  var ergebnis = parameter1 + parameter2;
  console.log(ergebnis);
}

summe(10, 20);


function produkt(parameter1, parameter2) {
  var ergebnis = parameter1 * parameter2;
  return ergebnis;
}

produkt(10, 20);

console.log(produkt(10, 20));

var multi = produkt(30, 40);

console.log(multi);