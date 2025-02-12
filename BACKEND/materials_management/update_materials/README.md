# Update Materials Microservice

This microservice updates existing materials in the database.

## 🚀 API Endpoints

- **PUT `/materials/{id}`** → Updates a material by ID.

## 🛠 Setup & Run

```sh
go mod tidy
go run main.go

##🐳 Run with Docker

docker build -t update_materials .
docker run -p 8082:8082 update_materials

##📄 Swagger Documentation
Once running, open:

[text](http://localhost:8082/swagger/index.html)