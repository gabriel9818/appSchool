<?php
require_once __DIR__ . '/../db/Database.php';

class MaterialModel {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance();
    }

    public function deleteMaterial($id) {
        try {
            $stmt = $this->db->prepare("DELETE FROM materials WHERE id = :id");
            $stmt->bindParam(":id", $id, PDO::PARAM_INT);
            $stmt->execute();

            return ($stmt->rowCount() > 0) ? ["message" => "Material deleted successfully"] : ["error" => "Material not found"];
        } catch (PDOException $e) {
            return ["error" => "Deletion failed: " . $e->getMessage()];
        }
    }
}
?>
