public class Main {

    public static void main(String[] args) {

        //Referenz
        //Auto flitzi = new Auto();
        //flitzi.setColor("blue");
        //flitzi.fahre();
        //System.out.println(flitzi.getColor());
        //System.out.println(flitzi);

        /*flitzi.setColor("blue");
        System.out.println(flitzi.getColor());
        flitzi.setColor("red");
        System.out.println(flitzi.getColor());*/

        Raumschiffjava raumschiff = new Raumschiffjava();
        raumschiff.geschwiendigkeit = 100;
        System.out.println("Geschwiendigkeit: " + raumschiff.getGeschwiendigkeit());
        raumschiff.leerGewischt = 75;
        System.out.println("LeerGewischt: " + raumschiff.getLeerGewischt());
        raumschiff.maxGewischt = 1500;
        System.out.println("MaxGewischt: " + raumschiff.getMaxGewischt());
        raumschiff.farbe = "yellow";
        System.out.println("Farbe: " + raumschiff.getFarbe());
        raumschiff.grosse = 100;
        System.out.println("Grosse: " + raumschiff.getGrosse());

    }
}
