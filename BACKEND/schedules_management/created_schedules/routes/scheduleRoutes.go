package routes

import (
	"created_schedules/controllers"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/schedules/create", controllers.CreateSchedule).Methods(http.MethodPost)
	return router
}
