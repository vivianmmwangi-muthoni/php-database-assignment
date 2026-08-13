<?php
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = trim($_POST['fullName']);
    $email = trim($_POST['emailAddress']);
    $focusArea = trim($_POST['role']);

    if (!empty($fullName) && !empty($email) && !empty($focusArea)) {
        $stmt = $conn->prepare("INSERT INTO formulators (full_name, email, focus_area) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $fullName, $email, $focusArea);

        if ($stmt->execute()) {
            header("Location: view_registry.php?status=success");
            exit();
        } else {
            echo "Database error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Please complete all required fields.";
    }
}
$conn->close();
?>