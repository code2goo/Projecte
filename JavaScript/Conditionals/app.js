let num1 = 100, num2 = 101;

if (num1 == num2) {
    console.log("number 1 is equal to number 2");
}
else if(num1 > num2){
    console.log("number 1 is greater than number 2")

}
else {
    console.log("number 1 is not equal to number 2")
}

console.log(
    num1 == num2 ? "they are equal" :
    num1 > num2 ? "they are not equal" :
    "num1 < num2"
);


