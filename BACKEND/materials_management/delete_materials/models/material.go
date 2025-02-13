package models

import (
	"delete_materials/db"
	"log"
)

// DeleteMaterial removes a material by ID from the database
func DeleteMaterial(id int) error {
	query := "DELETE FROM materials WHERE id = ?"
	_, err := db.DB.Exec(query, id)
	if err != nil {
		log.Printf("Error deleting material with ID %d: %v", id, err)
		return err
	}

	return nil
}
