<?php 
    session_start();
    $diaryContent = "";
    if (array_key_exists("id", $_COOKIE)) {
        $_SESSION["id"] = $_COOKIE["id"];
    }

    if (array_key_exists("id", $_SESSION) && $_SESSION["id"]) {
        include("connection.php");
        $query = "SELECT diary FROM users WHERE id =".mysqli_real_escape_string($link, $_SESSION['id']);
        $row = mysqli_fetch_array(mysqli_query($link, $query));
        $diaryContent = $row["diary"];
    } else {
        header("Location: index.php");
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <a href='index.php?logout=1'><div id="logout-btn">Log out</div></a>
        <div class="container"> 
            <textarea id="diary"><?php echo $diaryContent; ?></textarea>
        </div>

        <script src="scripts/jquery-3.1.1.min.js"></script>
        <script src="scripts/script.js"></script>
    </body>
</html>