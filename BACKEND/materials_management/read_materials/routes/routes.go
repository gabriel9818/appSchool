package routes

import (
	"read_materials/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter sets up all API routes for the microservice
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Material routes
	r.POST("/materials", controllers.CreateMaterialHandler)
	r.DELETE("/materials/:id", controllers.DeleteMaterialHandler)
	r.GET("/materials", controllers.GetAllMaterialsHandler)
	r.GET("/materials/:id", controllers.GetMaterialByIDHandler)

	return r
}
