<?php
require_once 'StudentModel.php';

class StudentController {
    public static function store() {
        header('Content-Type: application/json');

        // Leer el cuerpo de la solicitud
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (!isset($data['first_name'], $data['last_name'], $data['email'])) {
            echo json_encode(["status" => "error", "message" => "Campos obligatorios faltantes"]);
            exit;
        }

        // Insertar en la base de datos
        $response = StudentModel::createStudent(
            $data['first_name'],
            $data['last_name'],
            $data['email'],
            $data['phone'] ?? null
        );

        echo json_encode($response);
    }
}
