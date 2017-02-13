<?php
    include($_SERVER['DOCUMENT_ROOT'].'/exercise_07/php/connection.php');
    $data = json_decode(file_get_contents('php://input'), true);
    $getVotes = mysqli_fetch_array(mysqli_query($link, "SELECT * FROM `votes`"));

    $jsonElements = array(0 => 'chicken', 'beans', 'eggs', 'cheese', 'bread');
    $updateQuery = "UPDATE `votes` SET ";

    foreach ($jsonElements as $value) {
        $newValue = intval($getVotes[$value]) + $data[$value];
        $updateQuery .= "".$value." = ".$newValue.",";
    }
    $trimmedUpdatedQuery = substr($updateQuery, 0, -1);
    $trimmedUpdatedQuery .= " WHERE id = 1";

    mysqli_query($link, $trimmedUpdatedQuery);
 ?>
