<?php

header('Content-Type: application/json');

// Database credentials
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "refuge";

// DB_CONNECTION=mysql
// DB_HOST=127.0.0.1
// DB_PORT=3306
// DB_DATABASE=portfolio
// DB_USERNAME=root
// DB_PASSWORD=

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}