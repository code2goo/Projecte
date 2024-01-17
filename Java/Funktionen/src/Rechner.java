import java.util.Scanner;

public class Rechner {

    static int Addition(int a, int b){
        int erg = a + b;
        return erg;
    }
    static int Subtraktion(int a, int b){
        int erg = a - b;
        return erg;
    }
    static int  Multiplikation(int a, int b){
        int erg = a * b;
        return erg;
    }
    static int  Division(int a, int b){
        int erg = a / b;
        return erg;
    }
    static int  Modulo(int a, int b){
        int erg = a % b;
        return erg;
    }

    public static void main(String[] args) {

        Scanner eingabe = new Scanner(System.in);
        System.out.println("Bitte gib die erste Zahl ein:");
        int num1 = eingabe.nextInt();
        System.out.println("Bitte gib die erste Zahl ein:");
        int num2 = eingabe.nextInt();

        System.out.println("Wähle eine Operation, sollte zwischen 1 und 5 ");
        System.out.println("1. +");
        System.out.println("2. -");
        System.out.println("3. *");
        System.out.println("4. /");
        System.out.println("5. %");

        int wahl = eingabe.nextInt();

        int result = 0;

        switch (wahl) {
            case 1:
                result= Addition(num1, num2);
                break;
            case 2:
                result= Subtraktion(num1, num2);
                break;
            case 3:
                result= Multiplikation(num1, num2);
                break;
            case 4:
                result= Division(num1, num2);
                break;
            case 5:
                result= Modulo(num1, num2);
                break;
        }
        System.out.println("Das Ergibniss ist:  " + result);

    }
}
