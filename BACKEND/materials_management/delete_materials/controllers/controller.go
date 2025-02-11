package controllers

import (
	"delete_materials/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// DeleteMaterialHandler handles the request to delete a material
func DeleteMaterialHandler(c *gin.Context) {
	// Get the material ID from the URL parameter
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid material ID"})
		return
	}

	// Delete the material
	err = models.DeleteMaterial(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete material"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Material deleted successfully"})
}
