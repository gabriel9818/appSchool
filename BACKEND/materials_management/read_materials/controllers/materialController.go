package controllers

import (
	"encoding/json"
	"net/http"
	"read_materials/db"
	"read_materials/models"
)

// GetMaterials gets all materials from the database.
//
// @Summary Gets all materials
// @Description Returns a list of all materials stored in the database.
// @Tags materials
// @Accept json
// @Produce json
// @Success 200 {array} models.Material
// @Failure 500 {string} string "Internal server error"
// @Router /materials [get]
func GetMaterials(w http.ResponseWriter, r *http.Request) {
	rows, err := db.DB.Query("SELECT id, name, subject, description, created_at FROM materials")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var materials []models.Material
	for rows.Next() {
		var material models.Material
		if err := rows.Scan(&material.ID, &material.Name, &material.Subject, &material.Description, &material.CreatedAt); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		materials = append(materials, material)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(materials)
}
