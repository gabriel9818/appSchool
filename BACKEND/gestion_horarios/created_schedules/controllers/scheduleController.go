package controllers

import (
	"created_schedules/db"
	"created_schedules/models"
	"encoding/json"
	"net/http"
)

func CreateSchedule(w http.ResponseWriter, r *http.Request) {
	var schedule models.Schedule

	// Decodificar el cuerpo de la solicitud
	err := json.NewDecoder(r.Body).Decode(&schedule)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Insertar en la base de datos con UUID
	query := "INSERT INTO schedules (id, day, start_time, end_time, description) VALUES (UUID(), ?, ?, ?, ?)"
	_, err = db.DB.Exec(query, schedule.Day, schedule.StartTime, schedule.EndTime, schedule.Description)
	if err != nil {
		http.Error(w, "Failed to create schedule", http.StatusInternalServerError)
		return
	}

	// Recuperar el ID (UUID) del registro insertado
	query = "SELECT id FROM schedules WHERE day = ? AND start_time = ? AND end_time = ? AND description = ? ORDER BY created_at DESC LIMIT 1"
	row := db.DB.QueryRow(query, schedule.Day, schedule.StartTime, schedule.EndTime, schedule.Description)
	err = row.Scan(&schedule.ID)
	if err != nil {
		http.Error(w, "Failed to retrieve schedule ID", http.StatusInternalServerError)
		return
	}

	// Respuesta
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(schedule)
}
