<?php
require_once __DIR__ . '/../src/StudentController.php';

// Obtener la ruta solicitada
$uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

// Enrutamiento básico 
if ($uri === 'student' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    StudentController::store();
} else {
    http_response_code(404);
    echo json_encode(["status" => "error", "message" => "Ruta no encontrada"]);
}
