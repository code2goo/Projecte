class MyClass {
    constructor (color) {    //constructor: to creat the class optionen
        this.color = color;
    }
    // instance methods
    getColor() {
        return this.color;
    }
}

let myInstance = new MyClass("red");

// console.log(myInstance.getColor());


class User{
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let myUser = new User("Ahmad");
// console.log(myUser.getName());

// Class inheritance
class Animal{
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop() {
        this.speed= 0;
        console.log(`${this.name} stands still.`);
    }
}

class Wolf extends Animal{
    constructor(name, food){
        super(name);
        this.food = food;
    }
    eat() {
        console.log(`${this.name} is eating ${this.food}`);
    }
}

// Examples:
let animal1 = new Animal("My pet");

let myPet = new Wolf("my Wolf","rabbits");

// console.log(myPet);

// myPet.stop();
// myPet.run(100);
// myPet.eat();


// ****** Static props and methods
class Employee {
    static typeName() {
        return this == Employee
    }
    constructor(type) {
        this.type = type;
    }
}

// console.log(Employee.typeName());


let mohanad = new Employee("freelancer");
// console.log(mohanad.typeName()); // ERROR

class Article{
    static publisher = "Ahmad a h";
    
        constructor(title, date){
            this.title = title;
            this.date = date;
    }
}
// console.log(Article.publisher);
// console.log(new Article("JS","26/03/2023").publisher); // undefined



class Dogs {
    static planet = "Earth";

    constructor(name, speed){
        this.name = name
        this.speed = speed
    }
    run(speed = 0){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    static compare(dogA, dogB){
        return dogA.speed - dogB.speed;
    }
}

// inherit from Dogs

class Hasskey extends Dogs {
    bark() {
        return "haw haw";
    }
}
