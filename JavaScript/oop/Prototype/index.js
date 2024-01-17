let animal = { 
    eats_grass : true,
    eats_meat : false
}

let rabbit = {
    jumps : true
}

// Prototyple inheritance
rabbit._proto_ = animal;
rabbit.favFood = "Carrots";

// console.log(animal);
// console.log(rabbit.eats_meat);

//******************************************************************** */
let ITadminMethods = {
    setUserName: function (userName) {
        this.userName = userName;
    },
    setpassWD : function (passWD) {
        this.passWD = passWD;
    },
    addAuth: function (authority) {
        this.auth.push(authority);
    },
    deleteAuth : function(authIndex){
        this.auth.splice(authIndex,1);
    },
    getAuth: function() {
        return this.auth;
    },
    //**
    //  * 
    //  * @param {Boolean} addEl add authority if true, otherwise delete 
    //  * @param {String} authority to be setted
    //  */
    setAuth: function (addEl, authority) {
        let exist = this.auth.indexOf(authority);
        if(addEl && exist == -1) {
                this.auth.push(authority);
                return true;
            };
        if (!addEl && exist != -1) {
            this.auth.splice(exist, 1);
        };
    }
};
let ITadmin = {
    userName: "admin",
    passWD: "1234",
    auth: ["read","write","edit","delete"],
};

ITadmin._proto_=ITadminMethods;

let kamalAdmin = {
    _proto_: ITadmin
};
// kamalAdmin._proto_= ITadmin;

// kamalAdmin.setUserName("kamal");
// kamalAdmin.setpassWD("6688sdada55sda");

// Prototype Function : constructer Function, new Keyword

let wagen = {
    move : true,
    
}

////**** ES5 constructor function:
function Car(brand) {
    this.brand = brand;
}

////**** ES6 classes:
// class Car {
//     constructor(brand, numOfWheels){
//         this.brand = brand;
//         this.numOfWheels = numOfWheels;
//     }
// }

Car.prototype = wagen;

let myCar = new Car("BMW");

console.log(myCar);
