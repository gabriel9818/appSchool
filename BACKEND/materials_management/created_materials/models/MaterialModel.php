<?php
require_once __DIR__ . '/../db/Database.php';

class MaterialModel {
    private $pdo;

    public function __construct() {
        $this->pdo = Database::getInstance();
    }

    public function createMaterial($name, $subject, $description) {
        try {
            $stmt = $this->pdo->prepare("INSERT INTO materials (name, subject, description) VALUES (:name, :subject, :description)");
            $stmt->execute(['name' => $name, 'subject' => $subject, 'description' => $description]);
            return ["message" => "Material created successfully", "id" => $this->pdo->lastInsertId()];
        } catch (PDOException $e) {
            return ["error" => "Database error: " . $e->getMessage()];
        }
    }
}
?>
