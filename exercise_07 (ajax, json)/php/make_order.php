<?php
    include($_SERVER['DOCUMENT_ROOT'].'/exercise_07/php/connection.php');
    $data = json_decode(file_get_contents('php://input'), true);
    $query = "INSERT INTO `food-order` (name, food) VALUES ('".$data['name']."', '".$data['food']."')";
    mysqli_query($link, $query);

    $result = mysqli_query($link, "SELECT * FROM `food-order` ORDER BY id DESC LIMIT 1");
    $lastRow = mysqli_fetch_assoc($result);
    print_r(json_encode($lastRow));
 ?>
