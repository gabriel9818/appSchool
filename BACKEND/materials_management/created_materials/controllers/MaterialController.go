package controllers

import (
	"created_materials/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Create Material Handler handles the request to create a new material
func CreateMaterialHandler(c *gin.Context) {
	var input struct {
		Name        string `json:"name" binding:"required"`
		Subject     string `json:"subject" binding:"required"`
		Description string `json:"description"`
	}

	// Validate JSON input
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Insert material into the database
	insertedID, err := models.CreateMaterial(input.Name, input.Subject, input.Description)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create material"})
		return
	}

	// Respond successfully
	c.JSON(http.StatusCreated, gin.H{
		"message": "Material created successfully",
		"id":      insertedID,
	})
}
