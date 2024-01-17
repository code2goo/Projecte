import javax.swing.*;

public class Main {



    public static void main(String[] args) {
        System.out.println("STARTGAME");

        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                // Starte das erste Fenster
                new StartWindow();
        }
        });
    }
}
