import java.util.Scanner;

public class Main {

    static void beqruesse(){
        int x = 90;
        System.out.println("Ahoi "+ x);

        //Scanner input = new Scanner(System.in);
        //int a = input.nextInt();
    }
    static int addiere(int a, int b){
        int tmp = a + b;
        return tmp;
    }
    static int minimieren(int a, int b){
        int tmp = a - b;
        return tmp;
    }
    public static void main(String[] args) {
        beqruesse();
        beqruesse();

        int summe = addiere(3, 4);
        System.out.println(summe);

    }
}