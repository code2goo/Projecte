public class Auto {

    private String color;
    private int ps;

    // Konstruktoren
    // Schreibt man keinen Konstruktoren hin, wird ein DEFAULT KOnstruktor gestellt
    // Konstruktor ohne Parameter heißt Standardkonstruktor
    public Auto () {
        color = "rot";
        ps = 40;
    }


    //Schnittstellen
    public void setColor(String c){
        color = c;
    }
    public String getColor(){
        return color;
    }
    public void setPs(int p){
        ps = p;
    }
    public int getPs(){
        return ps;
    }

    // Weitere Methoden
    public  void fahre(){
        System.out.println("Auto fährt, brumm brumm.. ");
    }
}
