<?php
    $posts = "";
    displayPosts();
    session_start();
    
    if (!isset($_SESSION["username"])) {
        header("Location: login.php");
    }
    
    if ($_GET) {
        removePost();
    }

    if (array_key_exists("new-post", $_POST)) {
        header("Location: post_editor.php");
    }

    if (array_key_exists("logout", $_POST)) {
        unset($_SESSION["username"]);
        session_destroy();
        header("Location: login.php");
    }

    function displayPosts() {
        include "connection.php";
        $query = "SELECT * FROM `posts`";
        $title = mysqli_query($link, $query);
        $data = mysqli_fetch_all($title);
        for ($i = 0; $i < mysqli_num_rows($title); $i++) {
            $GLOBALS["posts"] .= 
                "<p><a id='post-link' href=post_details.php?id=".$data[$i][0].">".$data[$i][1]."</a></p>
                <span>
                    <a id='edit-anchor' href=post_editor.php?id=".$data[$i][0].">edit</a>
                    <a id='remove-anchor' href=dashboard.php?id=".$data[$i][0].">remove</a>
                </span>";
        }
    }

    function removePost() {
        include "connection.php";
        $query = "DELETE FROM posts WHERE id =".$_GET['id'];
        mysqli_query($link, $query);
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <div id="dashboard-container">
            <div class="logo">
                <p>blog</p>
            </div>
            <h1>Welcome back, <?php echo $_SESSION["username"]; ?>. <br> The posts you've written so far are:</h1>
            <div class="list-container">
                <?php echo $posts; ?>
            </div>
            <form method="post">
                <input id="newpost-btn" type="submit" name="new-post" value="Add New Post">
                <span>or</span>
                <input id="logout-btn" type="submit" name="logout" value="Logout">
            </form>
        </div>
    </body>
</html>