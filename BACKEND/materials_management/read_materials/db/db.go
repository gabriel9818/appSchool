package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

// Variable global de la base de datos
var DB *sql.DB

func Init() {
	// Cargar las variables del archivo .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error al cargar el archivo .env")
	}

	// Leer las variables de entorno
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbPort := os.Getenv("DB_PORT")

	// Construir la cadena de conexión
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPassword, dbHost, dbPort, dbName)

	// Conectar con MySQL
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Error al conectar con la base de datos:", err)
	}

	// Probar conexión
	if err = DB.Ping(); err != nil {
		log.Fatal("Fallo en el ping a la base de datos:", err)
	}

	fmt.Println("Conexión exitosa con la base de datos")
}
