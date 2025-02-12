package main

import (
	"log"
	"net/http"
	"os"

	"update_materials/db"
	"update_materials/routes"

	_ "update_materials/docs"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	httpSwagger "github.com/swaggo/http-swagger"
)

// @title Materials Management API
// @version 1.0
// @description API for managing materials (update, read, create and delete).
// @host localhost:8082
// @BasePath /

func main() {
	// charge  .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error loading .env file")
	}

	// read port .env
	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8080"
	}

	// init data base
	db.Init()

	r := mux.NewRouter()

	//routes
	routes.RegisterMaterialRoutes(r)

	// Routes of Swagger
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	log.Println("✅ Server running on port " + port)
	http.ListenAndServe(":"+port, r)
}
