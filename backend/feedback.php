<?php
// Load Composer's autoloader
require 'vendor/autoload.php';

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $rating = htmlspecialchars($_POST['rating']);
    $email = htmlspecialchars($_POST['email']);
    $feedback = htmlspecialchars($_POST['feedback']);

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
        $mail->setFrom('your_email@example.com', 'Feedback Form');
        $mail->addAddress('admin@example.com', 'Admin'); // Add admin's email address

        // Content
        $mail->isHTML(true);                      // Set email format to HTML
        $mail->Subject = 'New Feedback Received';
        $mail->Body    = "
            <html>
            <head>
            <title>New Feedback Received</title>
            </head>
            <body>
            <h2>New Feedback Received</h2>
            <p><strong>Rating:</strong> {$rating}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Feedback:</strong> {$feedback}</p>
            </body>
            </html>
        ";
        $mail->AltBody = "Rating: {$rating}\nEmail: {$email}\nFeedback: {$feedback}";

        $mail->send();
        echo 'Feedback has been sent successfully.';
    } catch (Exception $e) {
        echo "Feedback could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Invalid request method.';
}
?>
