<?php
    $post = "";    

    include "connection.php";
    $query = "SELECT * FROM `posts`";
    $data = mysqli_query($link, $query);
    $array = mysqli_fetch_all($data);
    for ($i = 0; $i < mysqli_num_rows($data); $i++) {
        $GLOBALS["post"] .= 
            "<div class='homepage-post'>
                <a href = 'post_details.php?id=".$array[$i][0]."'>
                    <div class='homepage-img' style='background-image: url(".$array[$i][4].");'></div>
                </a>
                <p id='date'>".$array[$i][5]."</p>
                <p>
                    <a href='post_details.php?id=".$array[$i][0]."'>".$array[$i][1]."</a>
                </p>
            </div>";
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/styles.css">
        
    </head>
    <body>
        <div id="homepage-container">
            <div class="logo">
                <p>blog</p>
            </div>
            <?php echo $post; ?>
        </div>
    </body>
</html>