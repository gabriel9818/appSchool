package main

import (
	"log"
	"net/http"
	"os"

	"read_schedules/db"
	"read_schedules/routes"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db.Connect()

	router := routes.SetupRoutes()

	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8081"
	}
	log.Printf("Starting server on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
