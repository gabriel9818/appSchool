package main

import (
	"log"
	"os"

	"gestion_horarios/models"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	// Cargar variables de entorno
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error al cargar el archivo .env")
	}

	// Construir la cadena de conexión
	dsn := os.Getenv("DB_USERNAME") + ":" + os.Getenv("DB_PASSWORD") +
		"@tcp(" + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + ")/" + os.Getenv("DB_DATABASE") +
		"?charset=utf8mb4&parseTime=True&loc=Local"

	// Conectar a la base de datos
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error al conectar a la base de datos:", err)
	}

	// Migrar el modelo Schedule
	DB.AutoMigrate(&models.Schedule{})
	models.DB = DB
	log.Println("Conexión exitosa a la base de datos")
}
