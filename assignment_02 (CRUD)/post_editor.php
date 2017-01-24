<?php
    $title = "";
    $subtitle = "";
    $imgPath = "";
    $content = "";
    $dateArray = getdate();
    $date = $dateArray["mday"]."th ".$dateArray["month"].", ".$dateArray["year"];
    $link = mysqli_connect("localhost", "jaskio", "jaskio123", "jaskio");
    session_start();

    if (!$_SESSION["username"]) {
        header("Location: login.php");
    }

    if ($_GET) {
        $query = "SELECT * FROM `posts` WHERE id = ".$_GET["id"];
        $data = mysqli_fetch_array(mysqli_query($link, $query));
        $title = $data["title"];
        $subtitle = $data["subtitle"];
        $imgPath = $data["img"];
        $content = $data["content"];
        
        if (isset($_POST['submit-btn'])) {
            updatePost($imgPath);
            header("Location: dashboard.php");
        }
    } 

    if (!$_GET) {
        if (isset($_POST['submit-btn'])) {
            newPost();
            header("Location: dashboard.php");
        }
    }

function updatePost($imgPath) {
    move_uploaded_file($_FILES["file"]["tmp_name"], $imgPath);
    $query = "UPDATE `posts` SET title = '".$_POST['title']."', subtitle = '".$_POST['subtitle']."', content = '".$_POST['content']."', img = '".$imgPath."', date = '".$GLOBALS['date']."' WHERE id = ".$_GET["id"]; 
    mysqli_query($GLOBALS['link'], $query);
}

function newPost() {
    $target_file = "uploads/".basename($_FILES["file"]["name"]);
    move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);
    $query = "INSERT INTO `posts` (title, subtitle, content, img, date) VALUES ('".$_POST['title']."', '".$_POST['subtitle']."', '".$_POST['content']."', '".$target_file."', '".$GLOBALS['date']."')";
    mysqli_query($GLOBALS['link'], $query);
}
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/trumbowyg.min.css">
    </head>
    <body>
        <div id="post-editor-container">
            <div class="logo">
                <p>blog</p>
            </div>
            <form id="post-form" method="post" enctype="multipart/form-data">
                <h1>New blog post</h1>
                <label>Title</label>
                <input type="text" name="title" value="<?php echo $title; ?>">
                <label>Subtitle</label>
                <input type="text" name="subtitle" value="<?php echo $subtitle; ?>">
                <label>Image</label>
                <div id="upload-section">
                    <div id="file-btn"><p>Upload Image</p></div>
                    <input type="file" id="file" name="file">
                    <div id="display-image" value="<?php echo $imgPath; ?>"></div>
                </div>   
                <p id="upload-report">File ready to upload</p>
                <label>Text</label>
                <textarea id="textarea" name="content">
                    <?php echo $content; ?>
                </textarea>
                <input id="publish-btn" type="submit" value="Publish" name="submit-btn">
            </form>
        </div>
        
        <script src="scripts/jquery-3.1.1.min.js"></script>
        <script src="scripts/trumbowyg.min.js"></script>
        <script src="scripts/text-editor.js"></script>
        <script src="scripts/upload.js"></script>
    </body>
</html>