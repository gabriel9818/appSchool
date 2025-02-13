package main

import (
	"log"
	"net/http"
	"os"

	"delete_materials/db"
	"delete_materials/routes"

	_ "delete_materials/docs"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	httpSwagger "github.com/swaggo/http-swagger"
)

// @title Delete Materials API
// @version 1.0
// @description API to delete materials from the database.
// @host localhost:8082
// @BasePath /

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error al cargar el archivo .env")
	}

	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8082" // Valor por defecto
	}

	db.InitDB()

	r := mux.NewRouter()

	routes.RegisterRoutes(r)

	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	log.Println("✅ Server running on port " + port)
	http.ListenAndServe(":"+port, r)
}
