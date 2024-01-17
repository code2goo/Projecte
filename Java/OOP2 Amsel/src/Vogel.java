
/*
Basisklasse Vogel
Mutterklasse
Vaterklasse
Elternklasse

Superklasse
 */

public class Vogel {

    private int alter = 20;
    private String farbe;

    public Vogel(int a, String f){
        alter = a;
        farbe = f;
    }

    public void setAlter(int a){
        alter = a;
    }
    public void fliege(){

        System.out.println("Vogel fliegt, flap flap flap");
    }
}
