<?php
if (isset($_GET['message']) && isset($_GET['number'])) {
    $message = $_GET['message'];
    $number = $_GET['number'];
    
    // WhatsApp URL format
    $url = "https://api.whatsapp.com/send?phone=$number&text=" . urlencode($message);
    
    header("Location: $url");
    exit();
}
?>
