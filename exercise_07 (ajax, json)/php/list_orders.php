<?php
    include($_SERVER['DOCUMENT_ROOT'].'/exercise_07/php/connection.php');
    $query = "SELECT * FROM `food-order`";
    $result = mysqli_query($link, $query);
    $result_array = [];
    while($row = $result->fetch_assoc()) {
        $row_data = new stdClass();
        $row_data->id = $row['id'];
        $row_data->name = $row['name'];
        $row_data->food = $row['food'];
        array_push($result_array, $row_data);
    }
    print_r(json_encode($result_array));
?>
