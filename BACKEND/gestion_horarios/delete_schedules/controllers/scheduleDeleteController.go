package controllers

import (
	"delete_schedules/db"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func DeleteSchedule(w http.ResponseWriter, r *http.Request) {
	log.Println("Received a request to delete a schedule")

	// Obtener el ID desde los parámetros de la URL
	params := mux.Vars(r)
	id := params["id"]
	if id == "" {
		log.Println("Missing ID parameter")
		http.Error(w, "Missing ID parameter", http.StatusBadRequest)
		return
	}

	// Ejecutar la consulta para eliminar
	query := "DELETE FROM schedules WHERE id = ?"
	result, err := db.DB.Exec(query, id)
	if err != nil {
		log.Println("Error executing delete query:", err)
		http.Error(w, "Failed to delete schedule", http.StatusInternalServerError)
		return
	}

	// Verificar si se eliminó algún registro
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		log.Println("Error retrieving rows affected:", err)
		http.Error(w, "Failed to verify deletion", http.StatusInternalServerError)
		return
	}

	if rowsAffected == 0 {
		log.Println("No schedule found with the given ID")
		http.Error(w, "No schedule found with the given ID", http.StatusNotFound)
		return
	}

	// Respuesta exitosa
	log.Printf("Schedule with ID %s deleted successfully", id)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Schedule deleted successfully"})
}
