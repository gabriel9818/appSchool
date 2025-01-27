package routes

import (
	"net/http"
	"read_schedules/controllers"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/schedules", controllers.GetSchedules).Methods(http.MethodGet)
	return router
}
