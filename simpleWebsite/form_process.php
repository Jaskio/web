<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
        $subject = $_POST['subject'];
		$from = 'Demo Contact Form'; 
		$to = 'jaskio89@gmail.com'; 
		
		$body = "From: $name\n E-Mail: $email\n Message:\n $message";
 	
	    mail ($to, $subject, $body, $from);
	}
?>