//Schleifen

//Inkrement- und Dekrementoperator

var i = 0;

console.log(i);

i++;

console.log(i);

console.log(i++);

console.log(i);

console.log(++i);


var d = 3;

console.log(d);

d--;

console.log(d);

console.log(d--);

console.log(d);

console.log(--d);


//for-Schleife

for (var i = 0; i < 3; i++) {
  console.log(i);
}

//kopfgesteuerte while-Schleife
var i = 0;

while (i < 3) {
  i++;
  console.log(i);
  
}

//fußgesteuerte while-Schleife

var i = 0;

do {
  i++;
  console.log(i);
} while (i < 3);

//break

var i = 0;

while (i < 10) {
  console.log(i);
  i++;
  
  if (i == 5) {
    console.log("Die Schleife wurde unterbrochen.");
    break;
  }
}

//continue

var i = 0;

while (i < 10) {
  i++;
  if (i % 2 != 0) {
    continue;
  } else {
    console.log(i);
  }
  
}






















