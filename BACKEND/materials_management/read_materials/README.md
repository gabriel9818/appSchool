# Read Materials Microservice

This microservice retrieves materials from the database.

## 🚀 API Endpoints

- **GET `/materials`** → Retrieves all materials.

## 🛠 Setup & Run

```sh
go mod tidy
go run main.go

##🐳 Run with Docker

docker build -t read_materials .
docker run -p 8081:8081 read_materials

##📄 Swagger Documentation
Once running, open:

[text](http://localhost:8081/swagger/index.html)