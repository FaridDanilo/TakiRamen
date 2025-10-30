<?php session_start(); 

include '../inc/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $stmt = $conn->prepare('SELECT * FROM admin WHERE user = ? AND pass = ?');
    $stmt->bind_param('ss', $user, $pass);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        $_SESSION['user'] = $row['user'];
        $_SESSION['rol'] = $row['rol'];
        header('Location: dashboard.php');
        exit;
    } else {
        echo 'Usuario o contraseña incorrectos';
    }
}
?>