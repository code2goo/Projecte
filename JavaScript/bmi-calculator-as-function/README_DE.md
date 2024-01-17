# BMI-Rechner als Funktion
Gehen wir noch einmal zu unserer BMI-Rechner-Übung zurück und ändern den Code so, dass er Funktionen verwendet.

- Navigiere zurück zu deinem BMI-Rechner GitHub-Übungsrepositorium
- Erstelle einen **neuen Zweig** für diese neue Version des Codes, so dass der ursprüngliche unangetastet bleibt und arbeite im neuen Zweig
- Anstatt globale Variablen zu haben und die Berechnungen im globalen Bereich durchzuführen, erstelle zwei Funktionen:
  1. **calculateBMI** nimmt drei Argumente entgegen: einen String `name`, eine Zahl `weight` und eine Zahl `height`. Sie gibt einen String mit dem Namen und der BMI-Zahl zurück.
  2. **whoIsBiggest** nimmt vier Argumente entgegen: zwei `name`-Strings und zwei `bmi`-Zahlen. Sie gibt die Zeichenkette mit dem Namen der größeren Person zurück.

**Bonus**
- Schreibe die Funktion **whoIsBiggest** so um, dass sie sechs Argumente benötigt: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- Die Funktion **whoIsBiggest** sollte die Funktion **calculateBMI** verwenden, um den BMI für beide Personen zu berechnen, bevor sie sie vergleicht und den Namen der Person mit dem größeren BMI zurückgibt (das bedeutet, dass im globalen Bereich nur die Funktion **whoIsBiggest** aufgerufen wird)
