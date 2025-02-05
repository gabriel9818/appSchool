<?php
require_once __DIR__ . '/../models/MaterialModel.php';

class MaterialController {
    private $model;

    public function __construct() {
        $this->model = new MaterialModel();
    }

    public function getMaterials() {
        header("Content-Type: application/json");

        $response = $this->model->getAllMaterials();
        echo json_encode($response);
        exit;
    }
}

$controller = new MaterialController();
$controller->getMaterials();
?>
