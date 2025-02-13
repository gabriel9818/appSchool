package routes

import (
	"delete_materials/controllers" //

	"github.com/gorilla/mux"
)

// RegisterRoutes configura las rutas del microservicio
func RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/materials/{id}", controllers.DeleteMaterial).Methods("DELETE") //
}
