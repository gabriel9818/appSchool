package controllers

import (
	"net/http"
	"read_materials/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetAllMaterialsHandler handles the request to retrieve all materials
func GetAllMaterialsHandler(c *gin.Context) {
	materials, err := models.GetAllMaterials()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch materials"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"materials": materials})
}

// GetMaterialByIDHandler handles the request to retrieve a material by its ID
func GetMaterialByIDHandler(c *gin.Context) {
	// Get the material ID from the URL parameter
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid material ID"})
		return
	}

	// Retrieve the material
	material, err := models.GetMaterialByID(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Material not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"material": material})
}
