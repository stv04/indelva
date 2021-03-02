<?php
    $destino 'elromerostiven@gmail.com';

    $nombre = $_GET["nombre"];
    $email = $_GET["email"];
    $tlf = $_GET["tlf"];
    $asunto = $_GET["asunto"];
    $mensaje = $_GET["mensaje"];

    $contenido = "Nombre: $nombre \n Correo: $email \n Telefono: $tlf \n Mensaje: $mensaje";

    mail($destino, $asunto, $contenido);

    echo "Su mensaje ha sido enviado exitosamente";

?>
