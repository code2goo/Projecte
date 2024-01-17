// 1
function calculateBMI(weight ,height ){
    BMI = Math.round(weight/((height / 100) * (height / 100)));
    return BMI;
}

console.log(calculateBMI(73, 168));

// 2
function whoIsBiggest(person1, person2, num1, num2){
    if (num1 > num2) {
        return person1;
    } else return person2;
}
// console.log(whoIsBiggest("Ahmad","Mohamad",33, 29));

// Bonus
function whoIsBiggest(person1, person2, height1, height2, weight1, weight2){
    if (person1.calculateBMI > person2.calculateBMI) {
        return person1;
    } else return person2;
}
console.log(whoIsBiggest("Ahmad","Mohamad",168, 170, 73, 80));



