### Array Methode .sort

#### 1. In absteigender Reihenfolge sortieren

```js
lass arr = [5, 2, 1, -10, 8];

// ... dein Code, um sie in absteigender Reihenfolge zu sortieren

console.log( arr ); // 8, 5, 2, 1, -10
```

#### 2. Wir haben ein Array mit Strings arr. Wir möchten eine sortierte Kopie davon haben, aber arr unverändert lassen.

* Erstelle eine Funktion copySorted(arr), die eine solche Kopie zurückgibt.

```js
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (keine Änderungen)
```
[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnis-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-sort/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-sort/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-sort/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs
[//]: # (autograding info end)