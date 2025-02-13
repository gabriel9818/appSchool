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
		port = "6002"
	}
	log.Printf("Starting server on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
