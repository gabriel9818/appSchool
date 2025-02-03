package models

type Schedule struct {
	ID          string `json:"id"`          // UUID del registro
	Day         string `json:"day"`         // Día
	StartTime   string `json:"start_time"`  // Hora de inicio
	EndTime     string `json:"end_time"`    // Hora de fin
	Description string `json:"description"` // Descripción
}
