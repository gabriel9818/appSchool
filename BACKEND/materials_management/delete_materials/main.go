package main

import (
	"delete_materials/db"
	"delete_materials/routes"
	"log"
)

func main() {
	// Initialize the database connection
	db.InitDB()

	// Set up API routes
	r := routes.SetupRouter()

	// Start the server on port 8080
	log.Println("Server is running on port 8080...")
	r.Run(":8080")
}
