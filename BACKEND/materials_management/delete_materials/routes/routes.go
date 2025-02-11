package routes

import (
	"delete_materials/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter sets up all API routes for the microservice
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Material routes
	r.POST("/materials", controllers.DeleteMaterialHandler)
	r.DELETE("/materials/:id", controllers.DeleteMaterialHandler)

	return r
}
