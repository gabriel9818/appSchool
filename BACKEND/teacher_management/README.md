# 📚 Teacher Management Microservices

## 📄 Description
The **Teacher Management** project is a set of microservices developed in **FastAPI** that allow managing teachers, including creating, deleting, reading, and updating records in a **PostgreSQL** database.

## ⚙️ Technologies Used
- **Python 3.10**
- **FastAPI**
- **PostgreSQL**
- **SQLAlchemy**
- **Docker & Docker Compose**
- **Uvicorn**

## 🛠️ Prerequisites
Ensure you have the following components installed on your system:
- **Docker** and **Docker Compose**
- **Python 3.10**
- **PostgreSQL**
- **Git**

## 🔄 Project Structure
```plaintext
BACKEND/
├── teacher_management/
│   ├── created_teachers/
│   ├── delete_teachers/
│   ├── read_teachers/
│   ├── update_teachers/
├── docker-compose.yml
└── .gitignore
```


## ⚙️ Environment Setup
Create a `.env` file inside `BACKEND/teacher_management/` with the following environment variables:

```env
DB_HOST_TEACHER=your_database_host
DB_PORT_TEACHER=your_database_port
DB_USER_TEACHER=your_database_user
DB_PASSWORD_TEACHER=your_database_password
DB_NAME_TEACHER=your_database_name
```
## ⚙️ Installation & Execution
1️⃣ Clone the Repository
```bash
git clone https://github.com/your_user/teacher_management.git
cd teacher_management/BACKEND/teacher_management
```
2️⃣ Build and Run with Docker Compose

```bash
docker-compose up -d --build
```
This will start the four microservices on the following ports:

- **Created Teachers: 8010**
- **Read Teachers: 8011**
- **Update Teachers: 8012**
- **Delete Teachers: 8013**
  
To check if the containers are running:
```bash
docker ps
```
3️⃣ Test with Postman or cURL
You can test each service by making HTTP requests:

- **Create a teacher:**
```bash
curl -X POST "http://localhost:8010/api/v1/teachers" -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com", "subject": "Mathematics"}'
```
- **Read all teachers:**
```bash
curl -X GET "http://localhost:8011/api/v1/teachers_read"
```
- **Update a teacher:**
```bash
curl -X PUT "http://localhost:8012/api/v1/teachers/1" -H "Content-Type: application/json" -d '{"name": "John Updated"}'
```
- **Delete a teacher:**
```bash
curl -X DELETE "http://localhost:8013/api/v1/teachers/1"
```
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

