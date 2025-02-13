package routes

import (
	"update_materials/controllers"

	"github.com/gorilla/mux"
)

func RegisterMaterialRoutes(router *mux.Router) {
	router.HandleFunc("/materials/{id}", controllers.UpdateMaterial).Methods("PUT")
}
