package routes

import (
	"delete_schedules/controllers"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/schedules/{id}", controllers.DeleteSchedule).Methods(http.MethodDelete) // Ruta para Delete
	return router
}
