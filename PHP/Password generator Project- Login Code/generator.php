<?php
// session_start(); (Dies ist auskommentiert)
require('db/config.php');

if (isset($_POST['generate_password'])) {
    if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];

        // Definiere die Zeichen für die verschiedenen Optionen
        $uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
        $number_chars = "0123456789";
        $special_chars = "!@#$%^&*()_+{}[]-/?.<>,";
        $password = "";

        // Überprüfe, welche Optionen ausgewählt sind und füge die entsprechenden Zeichen hinzu
        if (isset($_POST['GroßeBuchstaben'])) {
            $password .= $uppercase_chars;
        }
        if (isset($_POST['KleineBuchstaben'])) {
            $password .= $lowercase_chars;
        }
        if (isset($_POST['Zahlen'])) {
            $password .= $number_chars;
        }
        if (isset($_POST['Sonderzeichen'])) {
            $password .= $special_chars;
        }

        $password_length = 12;
        $generated_password = "";

        if (!empty($password)) {
            for ($i = 0; $i < $password_length; $i++) {
                $index = rand(0, strlen($password) - 1);
                $generated_password .= $password[$index];
            }

            // Speichere das generierte Passwort in der Datenbank
            $sql = "INSERT INTO tb_passwords (user_id, password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ss", $user_id, $generated_password);

            if ($stmt->execute()) {
                echo "<script>alert('Passwort erfolgreich generiert und in der Datenbank gespeichert!');</script>";
            } else {
                echo "Fehler beim Speichern des Passworts in der Datenbank: " . $stmt->error;
            }
        } else {
            echo "Fehler: Keine gültigen Zeichen für das Passwort ausgewählt.";
        }
    } else {
        echo "Benutzer-ID nicht in der Session gefunden. Bitte zuerst anmelden.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passwort Generator</title>
    <!-- CSS-Datei einbinden -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- Bootstrap CSS einbinden -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body class="d-flex justify-content-center">
    <!-- Passwort Generator -->
    <form class="row g-3 mt-5  rounded-5 p-5 registerForm bg-success-subtle w-25" method="POST">
        <h5 class="text-center mt-5 mb-3">Passwort Generator</h5>
        <div class="">
            <div>
                <input class="form-check-input" type="checkbox" value="1" name="GroßeBuchstaben" id="GroßeBuchstaben">
                <label for="GroßeBuchstaben">Große Buchstaben</label><br>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="1" name="KleineBuchstaben" id="KleineBuchstaben">
                <label for="KleineBuchstaben">Kleine Buchstaben</label><br>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="1" name="Zahlen" id="Zahlen">
                <label for="Zahlen">Zahlen</label><br>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="1" name="Sonderzeichen" id="Sonderzeichen">
                <label for="Sonderzeichen">Sonderzeichen</label><br>
            </div>
        </div>
        <div class="col-12 text-center mt-4">
            <!-- Submit-Button, um das Formular abzusenden -->
            <button class="btn btn-primary btn-sm  w-50" type="submit" name="generate_password">Passwort Generator</button>
        </div>
        <!-- Link zum Logout -->
        <a href="logout.php" class="btn btn-danger btn-sm w-25">Logout</a>
    </form>
</body>
</html>