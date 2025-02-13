package main

import (
	"log"
	"net/http"
	"os"

	"created_materials/db"
	"created_materials/routes"

	_ "created_materials/docs" // Required for Swagger

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	httpSwagger "github.com/swaggo/http-swagger"
)

// @title Created Materials API
// @version 1.0
// @description API for creating materials in the database.
// @host localhost:8084
// @BasePath /

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error loading .env file")
	}

	// Get server port from .env file
	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8084" // Default port if not specified
	}

	// Initialize database connection
	db.InitDB()

	// Create a new router
	r := mux.NewRouter()

	// Register API routes
	routes.RegisterRoutes(r)

	// Swagger route
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	log.Println("✅ Server running on port " + port)
	http.ListenAndServe(":"+port, r)
}
