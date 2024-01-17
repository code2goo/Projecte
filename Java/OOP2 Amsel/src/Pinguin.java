
public class Pinguin extends Vogel{

    public Pinguin (int a, String f){
        super(a, f);
    }

    @Override
    public void fliege(){

        super.fliege();
        System.out.println("Pinguin fliegt durch das Wasser, schwap schwap schwap");
    }
}
