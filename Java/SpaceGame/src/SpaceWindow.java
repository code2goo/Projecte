import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;

public class SpaceWindow extends JFrame {

    private  int width = 800, height = 800;
    Image spaceShip;

    public SpaceWindow() {
        super("i want to believe");

        setSize(width, height);

        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation((screenSize.width-width)/2,(screenSize.height-height)/2);
        setResizable(false);
        //setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);  // YOU CAN NOT CLOSE THE WINDOW
        setVisible(true);

        try
        {
            spaceShip = ImageIO.read(new File("spaceShip.png"));
        }
        catch (IOException e)
        {
            throw new RuntimeException(e);
        }

        int titleHeight = getInsets().top;
        int borderRight = getInsets().right;
        int borderLeft = getInsets().left;
        int borderBottom = getInsets().bottom;

        add(new SpaceGame(spaceShip, width-borderLeft-borderRight, height -borderBottom-titleHeight));
    }
}
