<?php
require_once 'config.php';

class StudentModel {
    public static function createStudent($firstName, $lastName, $email, $phone) {
        global $pdo;
        try {
            $stmt = $pdo->prepare("INSERT INTO students (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)");
            $stmt->execute([$firstName, $lastName, $email, $phone]);
            return ["status" => "success", "message" => "Estudiante registrado correctamente."];
        } catch (PDOException $e) {
            return ["status" => "error", "message" => $e->getMessage()];
        }
    }
}
