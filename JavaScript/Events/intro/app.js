// outer, middle, inner1, inner2

let outer, middle, inner1, inner2;
outer = document.getElementsByClassName("outer")[0];
middle = document.querySelector(".middle");
inner1 = document.getElementsByClassName("inner1")[0];
inner2 = document.getElementsByClassName("inner2")[0];


// define options :
const capture = {
    capture: true
};

const noneCapture = {
    capture: false
};

const once = {
    once: true
};

const noneOnce = {
    once: false
};

const passive = {
    passive: true
};

const nonePassive = {
    passive: false
};


// adding listners
// outer.addEventListener("click", onceHandler, once);
// outer.addEventListener("click", noneOnceHandler, noneOnce);
// middle.addEventListener("click", captureHandler1);
// middle.addEventListener("click", captureHandler2, noneCapture);
// middle.addEventListener("click", captureHandler3);
// middle.addEventListener("click", captureHandler4, capture);
inner1.addEventListener("click", passiveHandler, passive)
inner2.addEventListener("click", nonePassiveHandler)


// events handlers
function onceHandler(event) {
    console.log("outer, once");
}

function noneOnceHandler(event) {
    console.log("outer, none-pnce, defualt");
}

function captureHandler(event) {
    //event.stopImmediatePropagation();   // stop all the another events in the Parent Element, but not in child Element
    console.log("middle,capture");
}

function noneCaptureHandler(event) {
    console.log("middle,noneCapture");
}

function passiveHandler(event) {
    event.preventDefault(); // Unable to preventDefault with passive 
    console.log("inner1, passive, open new page");
}

function nonePassiveHandler(event) {
    event.preventDefault();
    console.log("inner1, passive, open new page");
}
