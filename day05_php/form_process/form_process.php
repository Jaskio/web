<?php 

if (isset($_POST["submit"])) {
    if ($_POST["email"] && $_POST["message"] && $_POST["subject"] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        sleep(5);
		$email = $_POST['email'];
		$message = $_POST['message'];
        $subject = $_POST['subject'];
		$from = 'Anonymous'; 
		$to = 'demo@gmail.com'; 
		
		$body = "From: $email\n Subject: $subject\n Message:\n $message";
	    mail($to, $subject, $body, $from);
    } else {
        sleep(15);
    }
}

?>