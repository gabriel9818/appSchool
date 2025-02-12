package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

// Global database variable
var DB *sql.DB

func Init() {
	// change .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// read credencials  .env
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbPort := os.Getenv("DB_PORT")

	// Building the connection chain
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPassword, dbHost, dbPort, dbName)

	// Conected with MySQL
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}

	// Test connection
	if err = DB.Ping(); err != nil {
		log.Fatal("Ping to database failed:", err)
	}

	fmt.Println("Successful connection to the database")
}
