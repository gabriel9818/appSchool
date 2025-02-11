package main

import (
	"log"
	"os"
	"read_materials/db"
	"read_materials/routes"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// Initialize the database connection
	db.InitDB()

	// Set up API routes
	r := routes.SetupRouter()

	// Get the port from environment variables
	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8080" // Default fallback
	}

	// Start the server
	log.Printf("Server is running on port %s...", port)
	r.Run(":" + port)
}
