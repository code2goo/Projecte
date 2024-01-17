import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class PasswordGenerator extends JFrame {

    private JCheckBox ubercaseCheckBox;
    private JCheckBox lowercaseCheckBox;
    private JCheckBox numbersCheckBox;
    private JCheckBox charsCheckBox;
    private JButton generateButton;
    private JTextField passwordLen;
    private JTextField passwordTextField;
    private JButton kopierenButton;

    public PasswordGenerator() {

        try {
            Image img = ImageIO.read(getClass().getResource("/img.png"));
            this.setIconImage(img);
        }catch (Exception ex){
        }

        this.setTitle("Password Generator");
        this.setSize(400,200);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setResizable(false);
        this.setLocationRelativeTo(null);

        //Panel
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 2));
        panel.setBackground(Color.darkGray);

        //Components
        // CheckBox  Ubercase
        ubercaseCheckBox = new JCheckBox("Ubercase Letters");
        panel.add(ubercaseCheckBox);
        ubercaseCheckBox.setBackground(Color.white);

        // CheckBox Lowercase
        lowercaseCheckBox = new JCheckBox("Lowercase Letters");
        panel.add(lowercaseCheckBox);

        // CheckBox  Numbers
        numbersCheckBox = new JCheckBox("Numbers");
        panel.add(numbersCheckBox);

        // CheckBox Chars
        charsCheckBox = new JCheckBox("another Chars");
        panel.add(charsCheckBox);
        charsCheckBox.setBackground(Color.white);

        // Textfield Password Length
        passwordLen = new JTextField();
        panel.add(passwordLen);


        // Button Generater
        generateButton = new JButton("Generate your Password");
        panel.add(generateButton);
        // Action listener Generater Button
        generateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                generatePassword();
            }
        });

        // TextField Password
        passwordTextField = new JTextField();
        panel.add(passwordTextField);
        passwordTextField.setBackground(Color.BLACK);
        passwordTextField.setForeground(Color.yellow);

        // Button Kopieren
        kopierenButton = new JButton("Kopieren");
        panel.add(kopierenButton);
        // Action listener Kopieren Button
        kopierenButton.addActionListener(new ActionListener() {
            @Override
            //Die Methode "setContents" wird verwendet, um den Inhalt in die Zwischenablage zu setzen.
            //Die Methode "getSystemClipboard", die Daten in die Zwischenablage kopieren oder aus der Zwischenablage einfügen können.
            public void actionPerformed( ActionEvent e ) {
                Toolkit.getDefaultToolkit().getSystemClipboard().setContents(
                        new StringSelection( passwordTextField.getText() ), null
                );
            }
        });

        //Add Panel
        this.add(panel);
        this.setVisible(true);
    }
    private void generatePassword() {
        String ubercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowercase = ubercase.toLowerCase();
        String numbers = "0123456789";
        String otherChars = "<>,.?/+-*_{}[]()&%$#@!?";

        StringBuilder allowedChars = new StringBuilder();

        if (ubercaseCheckBox.isSelected()){
            allowedChars.append(ubercase);
        }
        if (lowercaseCheckBox.isSelected()){
            allowedChars.append(lowercase);
        }
        if (numbersCheckBox.isSelected()){
            allowedChars.append(numbers);
        }
        if (charsCheckBox.isSelected()){
            allowedChars.append(otherChars);
        }


        String emptyChar = allowedChars.toString();

        if (emptyChar.isEmpty()) {
            passwordTextField.setText("Please select one option !!!");
            return;
        }

        int passLength;
        passLength = Integer.parseInt(passwordLen.getText());
        char[] password= new char[passLength];
        Random ran = new Random();

        for (int i = 0; i< passLength; i++) {
            password[i] = allowedChars.charAt(ran.nextInt(allowedChars.length()));
        }
        passwordTextField.setText(new String(password));
    }
}