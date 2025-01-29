<?php
require_once 'StudentModel.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['first_name'], $data['last_name'], $data['email'])) {
        echo json_encode(["status" => "error", "message" => "Campos obligatorios faltantes"]);
        exit;
    }

    $response = StudentModel::createStudent(
        $data['first_name'],
        $data['last_name'],
        $data['email'],
        $data['phone'] ?? null
    );

    echo json_encode($response);
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
