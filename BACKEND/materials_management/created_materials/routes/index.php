<?php
require_once __DIR__ . '/../controllers/MaterialController.php';

$controller = new MaterialController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller->createMaterial();
} else {
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode(["error" => "Method Not Allowed"]);
}
?>
