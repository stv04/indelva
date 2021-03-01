<?php
    $destino 'elromerostiven@gmail.com';

    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $tlf = $_POST["tlf"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Nombre: $nombre \n Correo: $email \n Telefono: $tlf \n Mensaje: $mensaje";

    mail($destino, $asunto, $contenido);

    echo("Su mensaje ha sido enviado exitosamente");

?>
