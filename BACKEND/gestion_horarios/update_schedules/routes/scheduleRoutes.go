package routes

import (
	"net/http"
	"update_schedules/controllers"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/schedules/{id}", controllers.UpdateSchedule).Methods(http.MethodPut) // Ruta para Update
	return router
}
