
public class schleifen {
    public  static void main(String[] args) {
        System.out.print("----------------------------");
        for (int i = 0; i <= 5 ; i++){
            for (int a = 1; a <= i; a++){
                System.out.print("*");
            }
        System.out.println();
        }
        System.out.print("----------------------------\n");
        for (int i = 5; i >= 0 ; i--){
            for (int a = 1; a <= i; a++){
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.print("----------------------------\n");
        /* Baum */

        for (int i = 0; i <= 5 ; i++){
            for (int x = 0; x < 5-i; x++){
                System.out.print(" ");
            }
            for (int a = 0; a < i*2+1; a++){
                System.out.print("*");
            }

            System.out.println();
        }
        System.out.print("----------------------------\n");

        /* Algorithmus */

        int n = 2;
        while (n > 1) {
            if (n % 2 != 0) {
                n = 3*n+1;
                System.out.println(n);
            }
            n = n/2;
            System.out.println(n);
        }




        /* System.out.print("---------------------------------");
        for (int x = 0, y = 10; x < 5; ++x, y += 5) {
            System.out.print(x + " " + y + " - ");
        }
        System.out.println();
        System.out.print("---------------------------------");
        */
        /*for (int i = 0; i<3; System.out.println(++i));*/

        /*System.out.print("while Schleife");*/

        /*int x = 1;
        while (x <= 4) {
            System.out.println(x);
            x++;
        }*/


    }
}
