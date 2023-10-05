<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "andersonrodriguez748@gmail.com"; 
    $subject = "Nuevo mensaje de contacto de $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
}
?>
