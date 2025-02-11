package routes

import (
	"created_materials/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter configures all routes of the microservice
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// routes for materials
	r.POST("/materials", controllers.CreateMaterialHandler)

	return r
}
