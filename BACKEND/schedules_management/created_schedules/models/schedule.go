package models

//Models
type Schedule struct {
	ID          string `json:"id"`                    // UUID como string
	Day         string `json:"day"`                   // Día
	StartTime   string `json:"start_time"`            // Hora de inicio
	EndTime     string `json:"end_time"`              // Hora de fin
	Description string `json:"description,omitempty"` // Descripción opcional
}
