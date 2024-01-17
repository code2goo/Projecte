import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int erg = 0;
        System.out.print("Type the first number: ");
        int number1 = scanner.nextInt();

        System.out.print("Type the second number: ");
        int number2 = scanner.nextInt();

        System.out.print("Enter the operator' + - * / ' ");
        char operator = scanner.next().charAt(0);

        switch (operator) {
            case '-' :
                erg = number1 - number2;
                break;
            case '+' :
                erg = number1 + number2;
                break;
            case '*' :
                erg = number1 * number2;
                break;
            case '/' :
                if (number2 !=0){
                    erg = number1 / number2;
                }else {
                    System.out.println("by 0 not allowed!!");
                    System.exit(1);
                }
                break;
            default:
                System.out.println("Invalid operator !!!");
                System.exit(1);
        }
        System.out.println("Erg: " + erg);
        scanner.close();
    }


}
