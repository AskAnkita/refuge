<?php

@include('connection.php');

// Get form data
$rating = $_POST['rating'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO feedbacks (rating, email, feedback) VALUES (?, ?, ?)");
$stmt->bind_param("iss", $rating, $email, $feedback);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "New record created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
}