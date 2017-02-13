<?php
    include($_SERVER['DOCUMENT_ROOT'].'/exercise_07/php/connection.php');
    $data = json_decode(file_get_contents('php://input'), true);
    $query = "DELETE FROM `food-order` WHERE id = '".$data["id"]."'";
    mysqli_query($link, $query);
 ?>
