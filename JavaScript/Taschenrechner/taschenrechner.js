document.querySelector("#Gleich").addEventListener("click", berechne);

function berechne() {
    var Zahl1 = document.querySelector("#Zahl1").valueAsNumber;
    //console.log(typeof Zahl1);
    //console.log(Zahl1);
    var Zahl2 = document.querySelector("#Zahl2").valueAsNumber;

    var Operator = document.querySelector("#Operator").value;
    //console.log(document.querySelector("#Operator").value);

    switch (Operator) {
        case "+":
            var Ergebnis = Zahl1 + Zahl2;
            break;
        case "-":
            var Ergebnis = Zahl1 - Zahl2;
            break;
        case "*":
            var Ergebnis = Zahl1 * Zahl2;
            break;
        case "/":
            var Ergebnis = Zahl1 / Zahl2;
            break;
        case "%":
            var Ergebnis = Zahl1 % Zahl2;
    }

    //console.log(document.querySelector("output"));

    document.querySelector("output").value = Ergebnis;
}