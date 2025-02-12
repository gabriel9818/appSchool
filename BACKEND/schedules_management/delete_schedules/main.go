package main

import (
	"delete_schedules/db"
	"delete_schedules/routes"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Cargar variables de entorno para borrar
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
		port = "8082" // Cambia el puerto si es necesario
	}
	log.Printf("Starting server on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
