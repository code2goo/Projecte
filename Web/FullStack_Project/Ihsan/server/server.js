// Server

const express = require("express");
const app = express()
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());


// Conect to DB
const connectDB = require('./config/db');
connectDB();



// Hashpassword
const bcrypt = require("bcrypt");
// json web token
const jwt = require("jsonwebtoken");

// const jwtSecret = process.env.SECRET_KEY;
// const token = jwt.sign({ id: user._id }, jwtSecret);


// Import User Model
const UserModel = require("./models/Users");
// Import Case Model
const CaseModel = require("./models/Cases");

// / : the path of gete. funktion: What will be implemented. 
// async : wait 
// get request
app.get("/users", async (req, res) =>{
    const users = await UserModel.find();
    res.json(users)
});

// create user
app.post("/createUser", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ username });
        const existingEmail = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ errors: { username: "Benutzername ist bereits vergeben." } });
        }

        if (existingEmail) {
            return res.status(400).json({ errors: { email: "E-Mail-Adresse ist bereits vergeben." } });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();

        return res.json({ message: "Benutzer wurde erfolgreich erstellt." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: { server: "Interner Serverfehler." } });
    }
});



// create user
// app.post("/createUser", async (req, res) =>{
//     const {username, email, password} = req.body;
//     const user = await UserModel.findOne({username})
//     user && res.json({message: "user exists!"})

//     const hachedPassword = bcrypt.hashSync(password, 10)

//     const newUser = new UserModel({username, email, password: hachedPassword});
//     await newUser.save();

//     return res.json(req.body)
// })

// update Profile
// user new Password 
// Middleware zum Überprüfen des JWT-Tokens
const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Kein Token bereitgestellt" });
  
    try {
      const decoded = jwt.verify(token, "Ihr geheimes Token-Schlüsselwort"); // Ändern Sie dies entsprechend Ihrem geheimen Token-Schlüsselwort
      req.user = decoded; // Dies ermöglicht es Ihnen, auf die Benutzerinformationen in Ihren Routen zuzugreifen
      next(); // Fahren Sie mit der nächsten Middleware oder der Route fort
    } catch (error) {
      res.status(401).json({ error: "Ungültiges Token" });
    }
};
// update Profile
app.put("/updateProfile", async (req, res) => {
    const { userID, newPassword, newUsername, newEmail } = req.body;
    try {
      // Verwenden Sie bcrypt oder eine sichere Methode, um das neue Passwort zu hashen.
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Aktualisieren Sie das Passwort des Benutzers in der Datenbank anhand der Benutzer-ID.
      await UserModel.findByIdAndUpdate(userID, { password: hashedPassword, username: newUsername, email: newEmail });
  
      return res.json({ message: "Das Passwort wurde erfolgreich geändert." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Passwortänderung fehlgeschlagen." });
    }
  });


// login
app.post("/loginUser", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ alert: "Benutzername und Passwort erforderlich" });
    }
    const user = await UserModel.findOne({ username });
    if (!user) {
        return res.status(401).json({ alert: "Benutzer existiert nicht" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ alert: "Benutzername oder Passwort ist nicht korrekt" });
    }
    const token = jwt.sign({ id: user._id }, " ");
    // 22/10/2023
    return res.json({ token, userID: user._id, username: user.username, email: user.email});
});


// / : the path of gete. funktion: What will be implemented. 
// async : wait 
// get request
app.get("/Cases", async (req, res) =>{
    const cases = await CaseModel.find();
    res.json(cases)
})

// New Case
app.post("/newCase", async (req, res) =>{
    const {caseID, caseName, caseImg, caseInfo, caseType, caseStatus, caseDonation, caseRemaining} = req.body;
    const cases = await CaseModel.findOne({caseID})
    cases && res.json({message: "Case exists!"})

    const newCase = new CaseModel({
        caseID, caseName, caseImg, caseInfo, caseType, caseStatus, caseDonation, caseRemaining
    });
    await newCase.save();

    return res.json(req.body)
})

// API get Cases
app.get("/getCases", async(req, res) =>{
    const cases = await CaseModel.find();
    res.json(cases);
})

// get Donation
// API-Endpunkt zum Hinzufügen einer Spende
app.post("/addDonation", async (req, res) => {
    try {
        const { userID, caseID, amount, paymentMethod } = req.body;

        // Hier kannst du die Spendeninformationen aus der Anfrage verarbeiten und in der Datenbank speichern
        const newDonation = new DonationModel({
            userID,
            caseID,
            amount,
            paymentMethod,
        });

        await newDonation.save();

        res.status(201).json({ message: "Spende erfolgreich hinzugefügt" });
    } catch (error) {
        console.error("Fehler beim Hinzufügen der Spende:", error);
        res.status(500).json({ error: "Fehler beim Hinzufügen der Spende" });
    }
});

// API-Endpunkt zum Abrufen von Spenden eines Benutzers
app.get("/userDonations/:userID", async (req, res) => {
    try {
        const userID = req.params.userID;

        // Hier kannst du alle Spenden für einen bestimmten Benutzer aus der Datenbank abrufen
        const userDonations = await DonationModel.find({ userID });

        res.json(userDonations);
    } catch (error) {
        console.error("Fehler beim Abrufen der Spenden des Benutzers:", error);
        res.status(500).json({ error: "Fehler beim Abrufen der Spenden des Benutzers" });
    }
});


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// app.listen("3001", () => {
//     console.log("Server Works")
// })