<?php
require_once __DIR__ . '/../controllers/MaterialController.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $controller = new MaterialController();
    $controller->deleteMaterial();
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
}
?>
