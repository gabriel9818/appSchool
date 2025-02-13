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
	// Si las variables de entorno ya están definidas, omitir cargar `.env`
	if os.Getenv("DB_HOST") == "" {
		log.Println("No environment variables found, loading .env file...")
		err := godotenv.Load(".env")
		if err != nil {
			log.Fatal("Error loading .env file:", err)
		}
	}

	// Conexión a la base de datos
	db.Connect()

	// Configurar rutas
	router := routes.SetupRoutes()

	// Iniciar el servidor
	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8081"
	}
	log.Printf("Starting server on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
