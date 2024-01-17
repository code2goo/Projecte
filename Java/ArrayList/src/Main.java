import java.sql.SQLOutput;
import java.util.*;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> cars = new ArrayList<String>();
        cars.add("BMW");
        cars.add("Audi");
        cars.add("Mercedec");
        cars.remove(2);
//        System.out.println(cars);

//        List<String> people = new ArrayList<String>();
        LinkedList<String> animals = new LinkedList<>();
        animals.add("AlAsad");
        animals.add("Abbas");
        animals.add("sisi");
//        System.out.println(animals);

        HashSet<String> setHash = new HashSet<>();
        setHash.add("A");
        setHash.add("B");
        setHash.add("C");
//        System.out.println(setHash);

        // sort the Numbers, Alphabet English, Alphabet Arabic
        TreeSet<String> setTree = new TreeSet<>();
        setTree.add("C");
        setTree.add("2");
        setTree.add("A");
        setTree.add("5");
        setTree.add("M");
//        System.out.println(setTree);


        // Top One HashMap
        HashMap<String, Integer> HashMap = new HashMap<>();
        HashMap.put("A", 10);
        HashMap.put("C", 30);
        HashMap.put("B", 20);
        HashMap.put("Z", 50);
        System.out.println(HashMap);
    }
}