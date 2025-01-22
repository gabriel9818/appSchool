package delete_schedules

import (
	"gestion_horarios/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func DeleteSchedule(c *gin.Context) {
	id := c.Param("id")
	if err := models.DB.Delete(&models.Schedule{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Horario eliminado"})
}
