package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"update_materials/db"
	"update_materials/models"

	"github.com/gorilla/mux"
)

// UpdateMaterial updates the data for a material.
//
// @Summary Updates an existing material
// @Description Updates the data for a material in the database.
// @Tags materials
// @Accept json
// @Produce json
// @Param id path int true "Material ID"
// @Param material body models.Material true "Data updated"
// @Success 200 {object} map[string]string "message: Material updated successfully"
// @Failure 400 {string} string "Invalid ID or incorrect data"
// @Failure 500 {string} string "Internal error"
// @Router /materials/{id} [put]
func UpdateMaterial(w http.ResponseWriter, r *http.Request) {
	// Get the ID from the URL
	vars := mux.Vars(r)
	materialID, err := strconv.Atoi(vars["id"])
	if err != nil {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	//Decoding body data
	var material models.Material
	err = json.NewDecoder(r.Body).Decode(&material)
	if err != nil {
		http.Error(w, "Datos inválidos", http.StatusBadRequest)
		return
	}

	// Perform the update on the database
	query := "UPDATE materials SET name=?, subject=?, description=? WHERE id=?"
	_, err = db.DB.Exec(query, material.Name, material.Subject, material.Description, materialID)
	if err != nil {
		http.Error(w, "Error al actualizar el material", http.StatusInternalServerError)
		return
	}

	// Success response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"message": "Material updated correctly"})
}
