<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $to = "vin3nt@bu.edu";
    $subject = "New Message from your Portfolio Site";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    $message = "Name: $name\n\nEmail: $email\n\nMessage:\n$comment";

    mail($to, $subject, $message, $headers);
    echo "Email sent!";
} else {
    echo "An error occurred!";
}
?>
