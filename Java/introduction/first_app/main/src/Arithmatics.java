public class Arithmatics {
    private int x;
    private int y;

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    // instance methods needs to be invoked by instance
    public int sum(){
        return this.x + this.y;
    }
}
