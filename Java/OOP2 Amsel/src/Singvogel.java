/*
 * Klasse Singvogel
 * abgeleitete Klasse von Vogel
 * Kindklasse
 *
 * Subklasse
 *
 * extends - erweitert
 * */

public class Singvogel extends Vogel {

    public Singvogel(int a, String f){
        super(a, f);
    }

    public void singe(){
        System.out.println("Singvogel singt, zwitscher zwitscher...");
    }
}