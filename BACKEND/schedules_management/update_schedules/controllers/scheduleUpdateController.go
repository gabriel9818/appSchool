package controllers

import (
	"encoding/json"
	"log"
	"net/http"
	"update_schedules/db"
	"update_schedules/models"

	"github.com/gorilla/mux"
)

func UpdateSchedule(w http.ResponseWriter, r *http.Request) {
	log.Println("Received a request to update a schedule")

	// Obtener el ID desde los parámetros de la URL
	params := mux.Vars(r)
	id := params["id"]
	if id == "" {
		log.Println("Missing ID parameter")
		http.Error(w, "Missing ID parameter", http.StatusBadRequest)
		return
	}

	// Decodificar el cuerpo de la solicitud
	var schedule models.Schedule
	err := json.NewDecoder(r.Body).Decode(&schedule)
	if err != nil {
		log.Println("Error decoding JSON:", err)
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Ejecutar la consulta de actualización
	query := "UPDATE schedules SET day = ?, start_time = ?, end_time = ?, description = ? WHERE id = ?"
	result, err := db.DB.Exec(query, schedule.Day, schedule.StartTime, schedule.EndTime, schedule.Description, id)
	if err != nil {
		log.Println("Error executing update query:", err)
		http.Error(w, "Failed to update schedule", http.StatusInternalServerError)
		return
	}

	// Verificar si se actualizó algún registro
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		log.Println("Error retrieving rows affected:", err)
		http.Error(w, "Failed to verify update", http.StatusInternalServerError)
		return
	}

	if rowsAffected == 0 {
		log.Println("No schedule found with the given ID")
		http.Error(w, "No schedule found with the given ID", http.StatusNotFound)
		return
	}

	// Respuesta exitosa
	log.Printf("Schedule with ID %s updated successfully", id)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Schedule updated successfully"})
}
