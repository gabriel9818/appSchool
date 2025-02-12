package controllers

import (
	"encoding/json"
	"net/http"

	"created_materials/db"
	"created_materials/models"
)

// CreateMaterial adds a new material to the database.
//
// @Summary Create a new material
// @Description Adds a new material entry to the database.
// @Tags materials
// @Accept json
// @Produce json
// @Param material body models.Material true "Material data"
// @Success 201 {object} map[string]string "message: Material created successfully"
// @Failure 400 {string} string "Invalid input"
// @Failure 500 {string} string "Internal server error"
// @Router /materials [post]
func CreateMaterial(w http.ResponseWriter, r *http.Request) {
	var material models.Material
	err := json.NewDecoder(r.Body).Decode(&material)
	if err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	query := "INSERT INTO materials (name, subject, description, created_at) VALUES (?, ?, ?, NOW())"
	_, err = db.DB.Exec(query, material.Name, material.Subject, material.Description)
	if err != nil {
		http.Error(w, "Error creating material", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"message": "Material created successfully"})
}
