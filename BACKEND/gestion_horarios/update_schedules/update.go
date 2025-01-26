package update_schedules

import (
	"gestion_horarios/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UpdateSchedule(c *gin.Context) {
	id := c.Param("id")
	var schedule models.Schedule
	if err := models.DB.First(&schedule, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Horario no encontrado"})
		return
	}
	if err := c.ShouldBindJSON(&schedule); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := models.DB.Save(&schedule).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Horario actualizado"})
}
