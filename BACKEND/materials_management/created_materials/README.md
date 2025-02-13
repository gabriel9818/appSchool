# Created Materials Microservice

This microservice allows adding new materials to the database.

## 🚀 API Endpoints

- **POST `/materials`** → Creates a new material.

## 🛠 Setup & Run

```sh
go mod tidy
go run main.go

##🐳 Run with Docker

docker build -t created_materials .
docker run -p 8084:8084 created_materials

📄 Swagger Documentation

Once running, open:

[text](http://localhost:8084/swagger/index.html)
