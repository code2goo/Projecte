import java.awt.*;

public class Pinsel extends Canvas {
    public int xPos, yPos;
    private int breite, hoehe;
    private Color color;
    public Pinsel(int x, int y, int b, int h, Color c){
        xPos = x;
        yPos = y;
        breite = b;
        hoehe = h;
        color = c;
    }

    @Override
    public void paint(Graphics g){
        g.setColor(color);

        //kreis, errechne den Mittelpunkt
        g.fillOval(xPos-breite/2, yPos-hoehe/2, breite, hoehe);

    }

}
