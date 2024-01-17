<?php

session_start();
$conn = mysqli_connect("localhost","root","","db_password_generator");

// Verbindungsfehler prüfen
if (mysqli_connect_errno()){
    echo "Kann nicht verbinden: " . mysqli_connect_error();
}
?>