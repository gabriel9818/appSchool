<?php
require_once __DIR__ . '/../db/Database.php';

class MaterialModel {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance();
    }

    public function getAllMaterials() {
        try {
            $query = "SELECT * FROM materials";
            $stmt = $this->db->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return ["error" => "Database query failed: " . $e->getMessage()];
        }
    }
}
?>
