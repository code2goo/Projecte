<?php
// Starte die PHP-Sitzung
session_start();

// Beende die Sitzung
session_destroy();

// Leite den Benutzer zur Home Seite weiter
header("Location: index.php");
exit;
?>