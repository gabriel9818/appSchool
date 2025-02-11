package controllers

import (
	"delete_schedules/db"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Schedule struct {
	ID          string `json:"id"`
	Day         string `json:"day"`
	StartTime   string `json:"start_time"`
	EndTime     string `json:"end_time"`
	Description string `json:"description,omitempty"`
	CreatedAt   string `json:"created_at"`
}

// Eliminar un horario basado en `day`, `start_time` y `end_time`
func DeleteSchedule(w http.ResponseWriter, r *http.Request) {
	log.Println("Received a request to delete a schedule")

	// Obtener los parámetros de la consulta
	params := mux.Vars(r)
	day := params["day"]
	startTime := params["start_time"]
	endTime := params["end_time"]

	if day == "" || startTime == "" || endTime == "" {
		log.Println("Missing parameters: day, start_time, end_time required")
		http.Error(w, "Missing parameters: day, start_time, and end_time required", http.StatusBadRequest)
		return
	}

	// Verificar si existe el registro antes de eliminarlo
	query := "SELECT id, day, start_time, end_time, description, created_at FROM schedules WHERE day = ? AND start_time = ? AND end_time = ?"
	var schedule Schedule
	err := db.DB.QueryRow(query, day, startTime, endTime).Scan(&schedule.ID, &schedule.Day, &schedule.StartTime, &schedule.EndTime, &schedule.Description, &schedule.CreatedAt)
	if err != nil {
		log.Println("No schedule found with the given parameters")
		http.Error(w, "No schedule found with the given parameters", http.StatusNotFound)
		return
	}

	// Ejecutar la eliminación
	deleteQuery := "DELETE FROM schedules WHERE id = ?"
	_, err = db.DB.Exec(deleteQuery, schedule.ID)
	if err != nil {
		log.Println("Error executing delete query:", err)
		http.Error(w, "Failed to delete schedule", http.StatusInternalServerError)
		return
	}

	// Responder con el registro eliminado
	log.Printf("Schedule deleted successfully: %+v", schedule)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(schedule)
}
