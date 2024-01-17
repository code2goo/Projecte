public class StackOverFlow {

    // jede schleife brauchte eine korrekte definierte Abbruchbedinung
    // jede Rekursion braucht eine korrekt definierte Abbruchbedinung

    static void dauerlaufen () {
        /*while (true) {
            int x = 20;
            System.out.println(x);
            dauerlaufen();
        }*/
    }

    static void countdown (int c) {
        System.out.println(c);
        if (c > 1) {
            countdown(c - 1 );
        }
    }

    public static void main(String[] args) {
        countdown(10);
        //dauerlaufen();
        //while (true) {
          //  int x = 20;
            //System.out.println(x);
        //}
    }
}
