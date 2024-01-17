<?php
    // Datenbankverbindung.
    require_once('db/config.php');

    if(isset($_POST['submit'])){
        $loginCode = $_POST['login_code'];

        // Suche nach einem Benutzer mit dem eingegebenen Login-Code in der Datenbank.
        $result = mysqli_query($conn, "SELECT * FROM tb_user WHERE login_code = '$loginCode'");

        if (mysqli_num_rows($result) > 0) {
            // Der Benutzer mit dem eingegebenen Login-Code existiert
            // Benutzer mit dem eingegebenen Login-Code gefunden
            $user = mysqli_fetch_assoc($result);
            $_SESSION['user_id'] = $user['user_id']; // Speichere die Benutzer-ID in der Session
            header("Location: generator.php"); // Leite den Benutzer zur Generator-Seite weiter
            exit;
        } else {
            // Anmeldefehler, wenn kein Benutzer mit dem eingegebenen Login-Code gefunden wurde.
            echo "Anmeldung fehlgeschlagen. Ungültiger Login-Code.";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS-Datei einbinden -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- Bootstrap CSS einbinden -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body class="d-flex justify-content-center">

    <!-- Login-Formular -->
    <form class="row g-3 mt-5 rounded-5 p-5 d-grid justify-content-center registerForm bg-success-subtle w-25" method="POST"> 
        <h5 class="text-center mt-5 mb-3">Passwort Generator</h5>
        <h5 class="text-center">LOGIN</h5>
        <h5 class="text-center mt-5 mb-3">Melden Sie sich mit Ihrem persönlichen Code an.</h5>
        <div class="col-md-4 w-100">
            <input type="text" class="form-control" id="validationServer01" value="" name="login_code" placeholder="Login Code" required>
        </div>

        <div class="col-12 text-center">
            <!-- Submit-Button, um das Formular abzusenden und sich anzumelden -->
            <button class="btn btn-sm btn-success w-25" type="submit" name="submit">Login</button> 
            <!-- Link zur Registrierungsseite -->
            <a href="./register.php" class="btn btn-sm btn-warning w-25">register</a>
        </div>
    </form>
</body>
</html>