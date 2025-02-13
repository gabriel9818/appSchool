package routes

import (
	"read_materials/controllers" // IMPORTACIÓN CORRECTA

	"github.com/gorilla/mux"
)

func RegisterMaterialRoutes(router *mux.Router) {
	router.HandleFunc("/materials", controllers.GetMaterials).Methods("GET")
}
