import javax.swing.*;
import java.awt.*;

public class DrawWindow extends JFrame {

    private int width= 500;
    private int height = 600;

    public DrawWindow(){
        // Init
        setSize(width, height);
        setTitle("Unser kleines MalFenster");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        // show Fenster
        setVisible(true);
        // repaint
        //setBackground(Color.red);
    }

    @Override
    public void paint(Graphics g) {

        // Definiere eine Farbe
        g.setColor(Color.GRAY);
        g.fillRect(0, 0, width, height);

        //Male die Farbe
        g.setColor(Color.black);
        g.fillRect(0, 0, 500, 200);

        g.setColor(Color.red);
        g.fillRect(0, 200, 500, 200);

        g.setColor(Color.YELLOW);
        g.fillRect(0, 400, 500, 200);

        //Definiere newu Farbe
        /*g.setColor(Color.cyan);
        g.drawLine(50,50,200,200);*/

        /*g.setColor(Color.white);
        int [] xcoords = {150,270,30};
        int [] ycoords = {180,350,350};
        g.fillPolygon(xcoords, ycoords, xcoords.length);*/

        //Male die Farbe
        /*g.setColor(Color.white);
        g.setFont(new Font("Arial", Font.BOLD, 40));
        g.drawString("Deutsche Flagge", 90, 310);*/

        // Niemals so tun - Belastet den Computer

        /*for (int i = 20; i < 460; i+=10) {
            g.setColor(Color.BLUE);
            g.fillOval(i, 460, 20, 20);

            try {
                Thread.sleep(20);
                //g.setColor(Color.GRAY);
                //g.fillRect(0, 0, width, height);

            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }*/
    }
}
