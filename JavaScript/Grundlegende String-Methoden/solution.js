// 1
const parkWalkStr = "with the vale park all day!";
let pos = parkWalkStr.indexOf('park');
let park = parkWalkStr.slice(pos, pos +4);
console.log(park);
// OR
console.log(parkWalkStr.substring(parkWalkStr.indexOf('park'), parkWalkStr.indexOf('park')+4));

// 2
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

// 3
const hello1Str = "Hello World";
console.log(helloStr.toLowerCase());

// 4
const jsStr = "JavaScript";
console.log(jsStr.slice(3,6));
console.log(jsStr.substring(3,6));

// 5
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"))
console.log(niceShoesStr.includes("n"))

// 6
oldStr = "Yaman";
givvenStr = "Happy Country";
const newStr = `${givvenStr[0]}${oldStr}${givvenStr[0]}`; //
console.log(newStr);
// OR
let modifiedStr = oldStr.replace(oldStr, `${oldStr[0]}${oldStr}${oldStr[0]}`);
console.log(modifiedStr);
console.log(oldStr);

// 7








