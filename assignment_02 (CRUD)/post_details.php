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

    if (isset($_POST["submit"])) {
        header("Location: homepage.php");
    }
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
            <form method="post">
                <?php echo $post; ?>
                <input type="submit" name="submit" value="Back to the list">
            </form>
        </div>
    </body>
</html>