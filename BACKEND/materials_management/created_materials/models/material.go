package models

import (
	"created_materials/db"
	"log"
	"time"
)

// Material represents the structure of the materials table
type Material struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	Subject     string    `json:"subject"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
}

// CreateMaterial inserts a new material into the database
func CreateMaterial(name, subject, description string) (int64, error) {
	query := "INSERT INTO materials (name, subject, description, created_at) VALUES (?, ?, ?, NOW())"
	result, err := db.DB.Exec(query, name, subject, description)
	if err != nil {
		log.Printf("Error inserting material: %v", err)
		return 0, err
	}

	insertedID, err := result.LastInsertId()
	if err != nil {
		log.Printf("Error retrieving last insert ID: %v", err)
		return 0, err
	}

	return insertedID, nil
}
