package models

import (
	"log"
)

// GetAllMaterials retrieves all materials from the database
func GetAllMaterials() ([]Material, error) {
	query := "SELECT id, name, subject, description, created_at FROM materials"
	rows, err := db.DB.Query(query)
	if err != nil {
		log.Printf("Error fetching materials: %v", err)
		return nil, err
	}
	defer rows.Close()

	var materials []Material
	for rows.Next() {
		var material Material
		if err := rows.Scan(&material.ID, &material.Name, &material.Subject, &material.Description, &material.CreatedAt); err != nil {
			log.Printf("Error scanning material: %v", err)
			return nil, err
		}
		materials = append(materials, material)
	}

	return materials, nil
}

// GetMaterialByID retrieves a single material by its ID
func GetMaterialByID(id int) (*Material, error) {
	query := "SELECT id, name, subject, description, created_at FROM materials WHERE id = ?"
	row := db.DB.QueryRow(query, id)

	var material Material
	err := row.Scan(&material.ID, &material.Name, &material.Subject, &material.Description, &material.CreatedAt)
	if err != nil {
		log.Printf("Error fetching material with ID %d: %v", id, err)
		return nil, err
	}

	return &material, nil
}
