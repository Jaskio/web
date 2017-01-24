<?php
    if (!$_GET["id"]) {
        die("Enter this page from homepage.php");
    }
    include "connection.php";
    $query = "SELECT * FROM `posts` WHERE id = ".$_GET["id"];
    $data = mysqli_fetch_array(mysqli_query($link, $query));
    $post = 
        "<div class='post-img' style='background-image: url(".$data["img"].");'></div>
        <div class='post-details'>
            <h2>".$data["title"]."</h2>
            <h3>".$data["subtitle"]."</h3>
            <p>".$data["content"]."</p>
        </div>";
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <div id="post-container">
            <div class="logo">
                <p>blog</p>
            </div>
            <?php echo $post; ?>
            <a href="index.php">
                <div id="back-btn">
                    <p>Back to the list</p>
                </div>
            </a>
        </div>
    </body>
</html>