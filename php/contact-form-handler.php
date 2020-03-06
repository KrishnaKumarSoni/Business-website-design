<?php
	
	if(isset($_POST['submit'])){

		$FirstName = $_POST['First-name'];
		$LastName = $_POST['Last-name'];
		$DOB = $_POST['Date-of-Birth'];
		$email = $_POST['email'];
		$contact = $_POST['Contact-number'];
		$address = $_POST['address'];
		$message = $_POST['message'];


		$subject = "Mail from website";
		$mailto = "right123@rightnumerology.com";
		$headers = "From: ".$email;
		$txt = "You recieved an email from ".$FirstName." ".$LastName.".\n\nCONTACT NUMBER: ".$contact."\nDATE OF BIRTH: ".$DOB."\nADDRESS: ".$address."\n\nMESSAGE: ".$message;

		mail($mailto, $subject, $txt, $headers);
		header("Location: ../index.html?mailsend");
	}

?>