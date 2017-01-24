<?php 
    $error = "";
    $link =  mysqli_connect("localhost", "jaskio", "jaskio123", "jaskio");
    session_start();

    if (array_key_exists("login", $_POST)) {
        include("connection.php");
        checkInputFields();
        if ($_POST['username'] AND $_POST['password'] AND checkLogin()) {  
            $_SESSION["username"] = $_POST["username"];
            header("Location: dashboard.php");
        }
    }

    function checkInputFields() {
        if (!$_POST["username"]) {
            $GLOBALS['error'] .= "Username is required<br>";
        }

        if (!$_POST["password"]) {
            $GLOBALS['error'] .= "Password is required";
        }
    }

    function checkLogin() {
        $query = "SELECT `password` FROM `users` WHERE username = '".mysqli_real_escape_string($GLOBALS['link'], $_POST['username'])."'";
            $getUserInfo = mysqli_query($GLOBALS['link'], $query);
            $usersArray = mysqli_fetch_array($getUserInfo);
            if ($usersArray[0] == md5($_POST["password"])) {
                return true;
            }
        return false;
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <div id="login-container">
            <div class="logo">
                <p>blog</p>
            </div>
            <form method="post">
                <h1>Login to blog system</h1>
                <label>Username</label>
                <input type="text" name="username">
                <label>Password</label>
                <input type="password" name="password">
                <input id="login-btn" type="submit" name="login" value="Login">
                <div class="error-msg">
                    <?php echo $error; ?>
                </div>
            </form>
        </div>
    </body>
</html>