package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"delete_materials/db"

	"github.com/gorilla/mux"
)

// DeleteMaterial removes a material from the database.
//
// @Summary Deletes a material
// @Description Deletes a material from the database by its ID.
// @Tags materials
// @Param id path int true "Material ID"
// @Success 200 {object} map[string]string "message: Material deleted successfully"
// @Failure 400 {string} string "Invalid ID"
// @Failure 500 {string} string "Internal error"
// @Router /materials/{id} [delete]
func DeleteMaterial(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	materialID, err := strconv.Atoi(vars["id"])
	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	query := "DELETE FROM materials WHERE id = ?"
	_, err = db.DB.Exec(query, materialID)
	if err != nil {
		http.Error(w, "Error deleting material", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"message": "Material removed successfully"})
}
