package main

import (
	"log"
	"net/http"
	"os"

	"read_materials/db"
	"read_materials/routes"

	_ "read_materials/docs" // IMPORTANTE: Se usa para Swagger

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	httpSwagger "github.com/swaggo/http-swagger"
)

// @title Read Materials API
// @version 1.0
// @description API for reading materials from the database.
// @host localhost:8081
// @BasePath /

func main() {
	// charge .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error loading .env file")
	}

	// read port .env
	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8081" // Valor por defecto
	}

	// Init data base
	db.Init()

	// Created  router
	r := mux.NewRouter()

	// Register routes of API
	routes.RegisterMaterialRoutes(r)

	// Route of Swagger
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	log.Println("✅ Server running on port " + port)
	http.ListenAndServe(":"+port, r)
}
