<?PHP
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone=$_POST['phone'];
$message = $_POST['message'];

$email_from = 'sbjit.co.nf';
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n"."phone number $phone.\n"
"Here is the message:\n $message".


$to = "ashish454570@gmail.com";
 $headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);



?>