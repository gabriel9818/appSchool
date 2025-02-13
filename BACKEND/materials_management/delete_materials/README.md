# Delete Materials Microservice

This microservice allows deleting materials from the database.

## 🚀 API Endpoints

- **DELETE `/materials/{id}`** → Deletes a material by ID.

## 🛠 Setup & Run

```sh
go mod tidy
go run main.go

##🐳 Run with Docker

docker build -t delete_materials .
docker run -p 8083:8083 delete_materials

##📄 Swagger Documentation

Once running, open:

[text](http://localhost:8083/swagger/index.html)
