import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;

public class Leinwand extends JFrame implements MouseListener, MouseMotionListener {
    Pinsel pinsel;
    public Leinwand () {
        super("LEINWAND");

        this.setSize(600, 600);
        this.setResizable(false);  //       Window same size
        //setLocationRelativeTo(null);   // Window Center
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setVisible(true);

        pinsel = new Pinsel(7,7,5,5, Color.GRAY);

        setBackground(new Color(0,0,0));

        // was horchst du ab ? Methode (WO bist du IMPLEMENTIERT , Interface?)
        this.addMouseListener(this);
        this.addMouseMotionListener(this);
    }

    /*paint wird automatisch gerufen*/

    @Override
    public void paint(Graphics g){
        pinsel.paint(g);
    }

    public void male(int x, int y){
        pinsel.xPos = x;
        pinsel.yPos = y;
    }



    @Override
    public void mouseClicked(MouseEvent e) {
        System.out.println("GEKLICKT" + e.getX() + " " + e.getY());
    }

    @Override
    public void mousePressed(MouseEvent e) {
        System.out.println("GEPRESST" + e.getX() + " " + e.getY());
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        System.out.println("GERELEASED" + e.getX() + " " + e.getY());
    }

    @Override
    public void mouseEntered(MouseEvent e) {
        System.out.println("GEENTERT" + e.getX() + " " + e.getY());
    }

    @Override
    public void mouseExited(MouseEvent e) {
        System.out.println("GEEXITID" + e.getX() + " " + e.getY());
    }

    @Override
    public void mouseDragged(MouseEvent e) {
        //System.out.println("GEDRAGGED" + e.getX() + " " + e.getY());

        male(e.getX(),e.getY());
        repaint(); // trigger das Neuzeichen, bitte um Newzeichnung
    }

    @Override
    public void mouseMoved(MouseEvent e) {
        System.out.println("GEMOVED" + e.getX() + " " + e.getY());

    }
}
