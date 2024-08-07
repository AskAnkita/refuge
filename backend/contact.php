<?php
// Load Composer's autoloader
require 'vendor/autoload.php';

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0;                      // Disable verbose debug output
        $mail->isSMTP();                           // Set mailer to use SMTP
        $mail->Host       = 'smtp.example.com';    // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                  // Enable SMTP authentication
        $mail->Username   = 'your_email@example.com'; // SMTP username
        $mail->Password   = 'your_email_password';  // SMTP password
        $mail->SMTPSecure = 'tls';                 // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                   // TCP port to connect to

        // Recipients
        $mail->setFrom('your_email@example.com', 'Contact Form');
        $mail->addAddress('admin@example.com', 'Admin'); // Add admin's email address

        // Content
        $mail->isHTML(true);                      // Set email format to HTML
        $mail->Subject = 'New Contact Us Message';
        $mail->Body    = "
            <html>
            <head>
            <title>New Contact Us Message</title>
            </head>
            <body>
            <h2>New Contact Us Message</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong> {$message}</p>
            </body>
            </html>
        ";
        $mail->AltBody = "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\nMessage: {$message}";

        $mail->send();
        echo 'Your message has been sent successfully.';
    } catch (Exception $e) {
        echo "Your message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Invalid request method.';
}
?>

