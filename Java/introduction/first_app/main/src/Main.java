public class Main {
    public static void main(String[] args) {
       // Main x = new Main(); // instantiation
        System.out.println(greeting("ahmad"));

        Arithmatics obj = new Arithmatics();
        Arithmatics obj2 = new Arithmatics();

        obj.setX(5);
        obj.setY(6);
        int result = obj.sum();

        obj2.setX(25);
        obj2.setY(50);

        System.out.println(result);
        System.out.println(obj2.sum());
    }
    // static method is aa method can be invoked by the class
    // inside the class we can invoke it without anything
    public static String greeting(String name){
        return "hello, " + name;
    }
}
