# 📌 Created Student Registration Microservice

## 📄 Description
Welcome to the Student Registration Microservices! 🚀 This project provides a set of microservices to manage student registrations, built using Bun, Elysia.js, and MySQL. Each microservice handles a specific operation: create, read, update, and delete student records.

---

## 🛠️ Requirements

Ensure you have the following installed:

- **Bun** (>= v1.2.1) [🔗 Install Bun](https://bun.sh/docs/installation)
- **Docker** (for containerization) [🔗 Install Docker](https://docs.docker.com/get-docker/)
- **MySQL** database configured
- **.env file** with database credentials:

```plaintext
DB_HOST=<your-mysql-host>
DB_NAME=<your-database-name>
DB_USER=<your-mysql-user>
DB_PASS=<your-mysql-password>
```
## 🔄 Project Structure
```plaintext
BACKEND/
├── student_registration/
│   ├── created_student/
│   ├── delete_student/
│   ├── read_student/
│   ├── update_student/
├── docker-compose.yml
└── .gitignore
```

## ⚙️ Environment Setup
Create a `.env` file inside `BACKEND/student_registration/` with the following environment variables:

```env
DB_HOST=<your-mysql-host>
DB_NAME=<your-database-name>
DB_USER=<your-mysql-user>
DB_PASS=<your-mysql-password>

```
## ⚙️ Installation & Execution
1️⃣ Clone the Repository
```bash
git clone https://github.com/your_user/student_registration.git
cd teacher_management/BACKEND/student_registration
```
2️⃣ Build and Run with Docker Compose

```bash
docker-compose up -d --build
```
This will start the four microservices on the following ports:

- **Created Student: 8085**
- **Read Student: 8086**
- **Update Student: 8087**
- **Delete Student: 8088**
  
To check if the containers are running:
```bash
docker ps
```
3️⃣ Test with Postman or cURL
You can test each service by making HTTP requests:

## 📊 Microservices Breakdown
Each microservice is contained within its own folder and follows this structure:

```plaintext
├── controllers/
├── db/
├── models/
├── routes/
├── main.py
├── requirements.txt
├── Dockerfile
```
- **controllers/: Contains business logic.**
- **db/: Database configuration using SQLAlchemy.**
- **models/: Database model definitions.**
- **routes/: FastAPI route definitions.**
- **main.py: Microservice entry point.**
- **requirements.txt: Required dependencies.**
- **Dockerfile: Docker setup for each service.**
  
## 📊 GraphQL Support (Optional)
The Student Registration System supports GraphQL for querying and mutating data efficiently. The GraphQL API is implemented alongside the REST endpoints to provide flexibility in data retrieval.

## GraphQL Installation
For Bun (Elysia.js)
```bash
bun add @elysiajs/graphql
```
##🚀 Running the GraphQL Server
If you have GraphQL enabled, you can access the GraphQL playground at:
```bash
 http://localhost:4000/graphql
```

## 📜 Swagger API Documentation
The Student Registration System provides a Swagger UI to explore API endpoints interactively.

## Swagger Installation
For Bun (Elysia.js)
```bash
bun add @elysiajs/swagger
```