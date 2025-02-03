<?php
require_once __DIR__ . '/../models/MaterialModel.php';

class MaterialController {
    private $model;

    public function __construct() {
        $this->model = new MaterialModel();
    }

    public function createMaterial() {
        header("Content-Type: application/json");

        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['name'], $data['subject'], $data['description'])) {
            echo json_encode(["error" => "Missing required fields"]);
            http_response_code(400);
            return;
        }

        $result = $this->model->createMaterial($data['name'], $data['subject'], $data['description']);
        
        echo json_encode($result);
        http_response_code(isset($result['error']) ? 500 : 201);
    }
}
?>

