<?php
    $conn = mysqli_connect("localhost", "root","", "chat");
    if(!$conn){
        echo "Base de dados conectada com sucesso" . mysqli_connect_error();
    }
?>