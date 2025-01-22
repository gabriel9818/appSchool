package read_schedules

import (
	"gestion_horarios/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetSchedules(c *gin.Context) {
	var schedules []models.Schedule
	if err := models.DB.Find(&schedules).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, schedules)
}

func GetScheduleByID(c *gin.Context) {
	id := c.Param("id")
	var schedule models.Schedule
	if err := models.DB.First(&schedule, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Horario no encontrado"})
		return
	}
	c.JSON(http.StatusOK, schedule)
}
