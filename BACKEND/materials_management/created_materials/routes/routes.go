package routes

import (
	"created_materials/controllers" //

	"github.com/gorilla/mux"
)

// RegisterRoutes sets up the API routes
func RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/materials", controllers.CreateMaterial).Methods("POST")
}
