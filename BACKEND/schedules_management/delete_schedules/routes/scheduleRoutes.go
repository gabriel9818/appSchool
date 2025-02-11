package routes

import (
	"delete_schedules/controllers"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/schedules_dl/{id}", controllers.DeleteSchedule).Methods(http.MethodDelete) // Ruta para Delete

	router.HandleFunc("/schedules/delete/{day}/{start_time}/{end_time}", controllers.DeleteSchedule).Methods(http.MethodDelete)

	return router
}
