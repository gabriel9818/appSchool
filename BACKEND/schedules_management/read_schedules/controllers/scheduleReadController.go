package controllers

import (
	"encoding/json"
	"log"
	"net/http"
	"read_schedules/db"
	"read_schedules/models"
)

func GetSchedules(w http.ResponseWriter, r *http.Request) {
	log.Println("Received a request to get all schedules")

	query := "SELECT id, day, start_time, end_time, description FROM schedules"
	rows, err := db.DB.Query(query)
	if err != nil {
		log.Println("Error executing select query:", err)
		http.Error(w, "Failed to fetch schedules", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var schedules []models.Schedule
	for rows.Next() {
		var schedule models.Schedule
		err := rows.Scan(&schedule.ID, &schedule.Day, &schedule.StartTime, &schedule.EndTime, &schedule.Description)
		if err != nil {
			log.Println("Error scanning row:", err)
			http.Error(w, "Failed to parse schedules", http.StatusInternalServerError)
			return
		}
		schedules = append(schedules, schedule)
	}

	if err = rows.Err(); err != nil {
		log.Println("Error after iterating rows:", err)
		http.Error(w, "Failed to fetch schedules", http.StatusInternalServerError)
		return
	}

	log.Printf("Fetched %d schedules\n", len(schedules))
	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(schedules)
	if err != nil {
		log.Println("Error encoding schedules to JSON:", err)
		http.Error(w, "Failed to encode schedules", http.StatusInternalServerError)
		return
	}

	log.Println("Schedules retrieved successfully and response sent")
}
