package main

import (
	"created_materials/db"
	"created_materials/routes"
	"log"
)

func main() {
	// Initialize the database
	db.InitDB()

	// Configurar rutas
	r := routes.SetupRouter()

	// Start server on port 8080
	log.Println("Server is running on port 8080...")
	r.Run(":8080")
}
