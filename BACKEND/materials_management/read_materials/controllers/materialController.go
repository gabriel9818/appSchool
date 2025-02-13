package controllers

import (
	"database/sql"
	"encoding/json"
	"log"
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
// GetMaterials retrieves materials from the database, filtered by subject_id if provided.
func GetMaterials(w http.ResponseWriter, r *http.Request) {
	// Get subject_id from query parameters
	queryParams := r.URL.Query()
	subjectID := queryParams.Get("subject_id")

	var rows *sql.Rows
	var err error

	if subjectID != "" {
		// Fetch materials for the given subject_id
		rows, err = db.DB.Query("SELECT id, name, subject, description, created_at FROM materials WHERE subject = ?", subjectID)
	} else {
		// Fetch all materials if no subject_id is provided
		rows, err = db.DB.Query("SELECT id, name, subject, description, created_at FROM materials")
	}

	if err != nil {
		log.Println("Error executing query:", err)
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

	// Send response in JSON format
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(materials)
}
