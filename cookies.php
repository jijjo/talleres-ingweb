<?php

$colorFavorito = null;
$nombreUsuario = null;

if(isset($_POST['color'])){
    $color = $_POST['color'];
    setcookie("colorFavorito", $color, time() + 84600);    
}else{
    ?>
    <form action="cookies.php" method="POST">
            ELEGIR COLOR: 
            <input type="text" value="red "name="color">
            <input type="submit" value="Enviar">
            <input type="text" value="blue" name="color">
            <input type="submit" value="Enviar">
            <input type="text" value="green" name="color">
            <input type="submit" value="Enviar">
    </form>
    <?php
}
if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
    setcookie("nombreUsuario", $nombre, time() + 84600);
}else{
    ?>
    <form action="cookies.php" method="POST">
        <input type="text" name="nombre">
        <input type="submit" value="Enviar">
    </form>
    <?php
}

if(isset($_COOKIE['nombreUsuario']) && isset($_COOKIE['colorFavorito'])){
    $colorFavorito = $_COOKIE['colorFavorito'];
    $nombreUsuario = $_COOKIE['nombreUsuario'];
    echo "<font color=\"$colorFavorito\"> Hola $nombreUsuario</font>";
}
?>
