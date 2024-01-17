//arrays

var namen = ["Navid", "Arkadiusz", "Guido"];

console.log(namen[0]);
console.log(namen[1]);
console.log(namen[2]);

namen[3] = "Ilya";

console.log(namen[3]);

console.log(namen.length);

namen[namen.length] = "Ahmad";

console.log(namen[4]);

console.log(namen.length);

namen.push("NeNe");

console.log(namen[5]);

for (var i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}

for (var i in namen) {
  console.log(namen[i]);
  console.log(i);
}

