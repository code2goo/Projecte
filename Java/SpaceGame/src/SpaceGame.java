import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class SpaceGame extends JPanel implements ActionListener {
    private int spaceWidth, spaceHeight;
    private Image spaceShip;
    private int shipWidth = 60, shipHeight = 60; // TODO: on Bild rechnerisch anpassen ;)
    private int shipX = 130, shipY = 130;
    private int delay = 40 ;
    private int speed = 10;
    private boolean isLeftPressed, isReightPressed, isUpPressed, isDownPressed;

    private Timer timer = new Timer(delay, this);
    public SpaceGame(Image spaceShip, int w, int h) {
        spaceWidth = w;
        spaceHeight = h;
        this.spaceShip = spaceShip;

        setBackground(Color.BLACK);

        // für spätere Listner
        this.setFocusable(true);
        this.requestFocusInWindow();
        fly();
        timer.start();
    }
    private void fly(){
        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                super.keyPressed(e);

                int action = e.getKeyCode();
                switch (action){
                    case KeyEvent.VK_LEFT :
                        isLeftPressed = true;
                        break;
                    case KeyEvent.VK_RIGHT:
                        isReightPressed = true;
                        break;
                    case KeyEvent.VK_UP :
                        isUpPressed = true;
                        break;
                    case KeyEvent.VK_DOWN :
                        isDownPressed = true;
                        break;
                }
            }

            @Override
            public void keyReleased(KeyEvent e) {
                super.keyReleased(e);
                int action = e.getKeyCode();
                switch (action){
                    case KeyEvent.VK_LEFT :
                        isLeftPressed = false;
                        break;
                    case KeyEvent.VK_RIGHT:
                        isReightPressed = false;
                        break;
                    case KeyEvent.VK_UP :
                        isUpPressed = false;
                        break;
                    case KeyEvent.VK_DOWN :
                        isDownPressed = false;
                        break;
                }

            }
        });
    }

    @Override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        g.drawImage(spaceShip, shipX,shipY,shipWidth,shipHeight,this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        if(isLeftPressed){
            shipX -= speed;
        }
        if(isReightPressed){
            shipX += speed;
        }
        if(isUpPressed){
            shipY -= speed;
        }
        if (isDownPressed){
            shipY += speed;
        }

        //---------------------------------------- ENTWEDER --->

//        if(isLeftPressed){
//            shipX-=speed;
//            if (shipX < 0 - shipWidth) shipX = spaceWidth;
//        }
//        if(isReightPressed){
//            shipX+=speed;
//            if (shipX > spaceWidth) shipX = 0 - shipWidth;
//        }
//        if(isDownPressed){
//            shipY+=speed;
//            if (shipY > spaceHeight) shipY = 0 - shipHeight;
//        }
//        if(isUpPressed){
//            shipY-=speed;
//            if (shipY < 0 - shipHeight) shipY = spaceHeight;
//        }
        // --------------------------------------------oder --->
        shipX = Math.floorMod(shipX, spaceWidth);
        shipY = Math.floorMod(shipY, spaceHeight);

        repaint(); // male alle $delay ms new
    }
}
