package main

import (
	"log"
	"net/http"
	"os"

	"update_schedules/db"
	"update_schedules/routes"

	"github.com/joho/godotenv" // Importar godotenv para cargar
)

func main() {
	// Cargar variables de entorno
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Conexión a la base de datos
	db.Connect()

	// Configurar rutas
	router := routes.SetupRoutes()

	// Iniciar servidor
	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8083"
	}
	log.Printf("Starting server on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
