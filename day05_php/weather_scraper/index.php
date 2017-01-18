<?php

    $weather_message = "";

    if (!empty($_GET["city"])) { 
        $city = str_replace(' ', '', $_GET['city']);
            $file_headers = @get_headers('http://www.weather-forecast.com/locations/'.$city.'/forecasts/latest');
            if ($file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $weather_message = "<div style='background-color:#FFAF84;height:35px;'><p style='padding:8px;'>That city could not be found.<p></div>";
            } else {

        $forecastPage = file_get_contents('http://www.weather-forecast.com/locations/'.$city.'/forecasts/latest');
        $pageArray = explode('1 &ndash; 3 Day Weather Forecast Summary:</b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">', $forecastPage);
        $secondPageArray = explode("</span></span></span>", $pageArray[1]);
        $weather_message = "<p>".$secondPageArray[0]."</p>";
            } 
        }

?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <video id="background" autoplay loop>
            <source src="videos/background-video.mp4" type="video/mp4">
            <source src="videos/background-video.ogg" type="video/ogg"> 
        </video>
        <form class="main-container">
            <h1>What's The Weather?</h1>
            <p>Enter the name of a city.</p>
            <input id="city-input" placeholder="Eg. London, Tokyo" name="city" value="">
            <input id="submit-btn" type="submit" name="submit-btn">
            <div id="weather">
                <?php echo $weather_message ?>
            </div>
        </form>
    </body>
</html>