package main

import (
	"log"
	"net/http"
	"os"

	"created_schedules/db"
	"created_schedules/routes"

	"github.com/joho/godotenv"
)

func main() {
	// Cargar variables de entorno desde .env

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Conexión a la base de datos
	db.Connect()

	// Configurar rutas
	router := routes.SetupRoutes()

	// Iniciar el servidor
	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Starting server on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
