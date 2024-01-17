<?php
    // Datenbankverbindung.
    require_once('db/config.php');

    // Wenn das Formular gesendet wurde, Werte in die Datenbank einfügen.
    if(isset($_POST["register"])) {
        $username = $_POST["username"];
        $email = $_POST["email"];
        // zufälligen Login-Code
        $login_code = generateRandomCode();

        // Überprüfe, ob Benutzername oder E-Mail bereits in der Datenbank existieren.
        $duplicate = mysqli_query($conn, "SELECT * FROM tb_user WHERE username= '$username' OR email = '$email'");
        if (mysqli_num_rows($duplicate) > 0) {
            // Wenn es Duplikate gibt, zeige eine Fehlermeldung an.
            echo "<script> alert('Username oder Email sind schon vergeben!'); </script>";
        } else {
            // Wenn keine Duplikate gefunden wurden, füge die Benutzerdaten in die Datenbank ein.
            $sql = "INSERT INTO tb_user(username, email, login_code) VALUES ('$username', '$email', '$login_code')";
            if (mysqli_query($conn, $sql)) {
                // Erfolgsmeldung anzeigen, einschließlich des generierten Login-Codes.
                echo "<script> alert('Registrierung erfolgreich! Dein Login-Code: $login_code'); </script>";
            } else {
                // Wenn ein Fehler bei der Datenbankeinfügung auftritt, zeige die Fehlermeldung an.
                echo "Fehler bei der Registrierung. " . mysqli_error($conn);
            }
        }
    }

    // Funktion zur Generierung eines zufälligen Codes.
    function generateRandomCode() {
        $length = 8; // Länge des zufälligen Codes
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $code = '';
        for ($i = 0; $i < $length; $i++) {
            // Zufällige Zeichen aus der Zeichenkette auswählen und zum Code hinzufügen.
            $code .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $code;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <!-- CSS-Datei einbinden -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- Bootstrap CSS einbinden -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body class="d-flex justify-content-center">
    <!-- Registrierungsformular -->
    <form class="row g-3 mt-5 rounded-5  p-5 d-grid justify-content-center registerForm bg-success-subtle w-25" method="POST" action="" name="">
        <h5 class="text-center mt-5 mb-3">Passwort Generator</h5>
        <h5 class="text-center">Register</h5>
        <h5 class="text-center mt-5 mb-3">Registrieren Sie ein neues Konto, um einen Login-Code zu erhalten.</h5>
        <div class="col-md-4 w-100">
            <input type="text" class="form-control" name="username" id="username" placeholder="Username" value="" required>
        </div>
        <div class="col-md-4 w-100">
            <input type="text" class="form-control" name="email" id="email" placeholder="Email Adress" value="" required>
        </div>
        <div class="col-12 text-center">
            <!-- Submit-Button, um das Formular abzusenden -->
            <button class="btn btn-primary btn-sm  w-50" type="submit" id="submit" name="register">Register</button><br>
            <!-- Link zum Login-Formular -->
            <a href="./index.php" class="btn btn-sm btn-success mt-2 w-50">Login</a>
        </div>
    </form>
</body>
</html>