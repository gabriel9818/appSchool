<?php
require_once __DIR__ . '/StudentController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/student' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    StudentController::store();
} else {
    header("HTTP/1.1 404 Not Found");
    echo json_encode(["status" => "error", "message" => "Ruta no encontrada"]);
}
