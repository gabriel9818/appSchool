package main

import (
	"gestion_horarios/dominios_horarios/created_schedules"
	delete_schedules "gestion_horarios/dominios_horarios/delet_schedules"
	"gestion_horarios/dominios_horarios/read_schedules"
	"gestion_horarios/dominios_horarios/update_schedules"

	"github.com/gin-gonic/gin"
)

func main() {
	// Inicializar la base de datos
	InitDB()

	// Configurar el router
	router := gin.Default()

	// Rutas CRUD
	router.POST("/api/schedules", created_schedules.CreateSchedule)
	router.GET("/api/schedules", read_schedules.GetSchedules)
	router.GET("/api/schedules/:id", read_schedules.GetScheduleByID)
	router.PUT("/api/schedules/:id", update_schedules.UpdateSchedule)
	router.DELETE("/api/schedules/:id", delete_schedules.DeleteSchedule)

	// Iniciar el servidor
	router.Run(":8080")
}
