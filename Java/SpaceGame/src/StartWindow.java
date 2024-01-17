import javax.sound.midi.Sequence;
import javax.sound.midi.Sequencer;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.sound.midi.*;
import java.io.IOException;
import java.io.File;
public class StartWindow extends JFrame implements ActionListener {

    private int width = 600;
    private int height = 400;
    private JButton startGame;
    private JButton startMusic;

    private boolean gmeActive = false;
    private SpaceWindow spaceWindow;
    private Sequencer sequencer;
    private boolean musicActive = false;
    public StartWindow(){
        super("EnterPrise Game");
        setSize(width, height);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setResizable(false);
        setAlwaysOnTop(true);
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        //setLocationRelativeTo(null);
        this.setLocation((screenSize.width - width)/2, (screenSize.height-height)/2);

        //setContentPane(new JLabel(new ImageIcon("./night.jpeg")));
        setLayout(new BorderLayout());
        // Nordbereich JPanel, dass Layout.Flow hat
        JPanel panelNorth = new JPanel();
        panelNorth.setLayout(new FlowLayout());
        panelNorth.setBackground(Color.BLACK);

        // Buttons
        // START GAME
        startGame = new JButton();
        startGame.setBorderPainted(false);
        startGame.setOpaque(true);
        startGame.setBackground(Color.CYAN);
        startGame.setText("Start Game");
        panelNorth.add(startGame);

        //START MUSIC
        startMusic = new JButton();
        startMusic.setText("START MUSIC");
        panelNorth.add(startMusic);

        JTextArea gameManual = new JTextArea();
        gameManual.setForeground(Color.white);
        gameManual.setBackground(Color.BLACK);
        gameManual.setFont(new Font("Arial", Font.ITALIC, 20));
        gameManual.setComponentOrientation(ComponentOrientation.LEFT_TO_RIGHT);
        gameManual.setMargin(new Insets(30,30,30,30));
        gameManual.setText("Der Weltraum, unendliche Weiten\r\n"+
                            "Wir schreiben das Jahr 2200\r\n"+
                            "Dies sind die Abentreuer des Raumschiffs Enterprise\r\n"+
                            "... neue Zivilisationen..");

        add(gameManual, BorderLayout.CENTER);
        add(panelNorth, BorderLayout.NORTH);
        setVisible(true);

        startGame.addActionListener(this);
        startMusic.addActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("geklickt");
        if(e.getSource()== startGame){
            System.out.println("StartGame geklickt");

            if (!gmeActive){
                startGame.setText("STOP GAME");
                gmeActive = true;
                // >TODO: muss noch das Schließende x behandel
                spaceWindow = new SpaceWindow();

            }else {
                startGame.setText("START GAME");
                gmeActive = false;
                spaceWindow.dispose();
                spaceWindow= null;
            }

        }else {

            if (musicActive == false)
            {
                startMusic.setText("STOP MUSIC");
                musicActive = true;
                try {
                    startTheMusicNow();
                } catch (MidiUnavailableException ex) {
                    throw new RuntimeException(ex);
                } catch (InvalidMidiDataException ex) {
                    throw new RuntimeException(ex);
                } catch (IOException ex) {
                    throw new RuntimeException(ex);
                }
            }
            else
            {
                startMusic.setText("START MUSIC");
                musicActive = false;
                sequencer.stop();
            }

        }
    }
    private void startTheMusicNow() throws MidiUnavailableException, InvalidMidiDataException, IOException {

        var synth = MidiSystem.getSynthesizer();
        synth.loadAllInstruments(synth.getDefaultSoundbank());

        sequencer = MidiSystem.getSequencer();

        var sequence = MidiSystem.getSequence(new File("level8_.mid"));

        sequencer.open();
        sequencer.setSequence(sequence);
        sequencer.setTempoFactor(1f);

        sequencer.start();
    }
}
