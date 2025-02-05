<?php
require_once __DIR__ . '/../models/MaterialModel.php';

class MaterialController {
    private $model;

    public function __construct() {
        $this->model = new MaterialModel();
    }

    public function deleteMaterial() {
        header("Content-Type: application/json");

        $id = isset($_GET['id']) ? intval($_GET['id']) : 0;

        if ($id === 0) {
            echo json_encode(["error" => "Invalid ID"]);
            exit;  // 🔹 Agregamos `exit;` para evitar respuestas duplicadas
        }

        $response = $this->model->deleteMaterial($id);
        echo json_encode($response);
        exit;  // 🔹 Evita que PHP continúe ejecutando código después del JSON
    }
}

$controller = new MaterialController();
$controller->deleteMaterial();
?>
