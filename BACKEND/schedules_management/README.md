# 📅 Schedules Management Microservices

## 📄 Description
The Schedules Management microservice handles scheduling operations in a distributed system. It provides CRUD functionality (Create, Read, Update, Delete) for managing schedules stored in a MySQL database. Each operation is handled by an independent microservice (created_schedules, read_schedules, update_schedules, delete_schedules), ensuring modularity and scalability. The system exposes RESTful APIs and is Dockerized, making it easy to deploy and manage in production or test environments.

This repository contains the `Schedules Management` module, which is composed of four microservices:
- `created_schedules`
- `read_schedules`
- `update_schedules`
- `delete_schedules`

Each microservice is containerized using Docker and orchestrated via Docker Compose.

## 📌 Features
- **CRUD operations** for managing schedules.
- Uses **Go (Golang)** for backend development.
- **MySQL** as the database.
- Dockerized microservices with `docker-compose.yml`.

## 🛠 Prerequisites
- **Docker** (Ensure Docker is installed: https://docs.docker.com/get-docker/)
- **Docker Compose**
- **Go (1.20 or later)**
- **MySQL Database**
- `.env` file with database credentials

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/schedules_management.git
cd schedules_management/BACKEND/schedules_management
```

### 2️⃣ Configure Environment Variables
Create a `.env` file in the `schedules_management` directory:
```ini
DB_HOST=your-mysql-host
DB_PORT=3306
DB_NAME=schedules_db
DB_USER=root
DB_PASSWORD=yourpassword
```

### 3️⃣ Build & Run Containers
```bash
docker-compose up -d --build
```
This will start all four microservices and link them to the `schedules_network`.

## 🔥 Running the Services Locally (Without Docker)
To run a microservice manually:
```bash
cd BACKEND/schedules_management/created_schedules
export $(grep -v '^#' .env | xargs)
go run main.go
```
Repeat for other microservices (`read_schedules`, `update_schedules`, `delete_schedules`).

## 📡 API Endpoints
### Create Schedule (`created_schedules`)
**Endpoint:** `POST /schedules/create`
```json
{
  "day": "Monday",
  "start_time": "09:00",
  "end_time": "10:00",
  "description": "Team meeting"
}
```

### Read Schedules (`read_schedules`)
**Endpoint:** `GET /schedules`

### Update Schedule (`update_schedules`)
**Endpoint:** `PUT /schedules/{id}`
```json
{
  "day": "Tuesday",
  "start_time": "10:00",
  "end_time": "11:00",
  "description": "Updated team meeting"
}
```

### Delete Schedule (`delete_schedules`)
**Endpoint:** `DELETE /schedules/delete/{day}/{start_time}/{end_time}`

## 🛠 Docker Compose File Overview
The `docker-compose.yml` file defines the services:
```yaml
version: '3.8'
services:
  created_schedules:
    image: ${{ secrets.DOCKER_USERNAME }}/created_schedules:latest
    container_name: created_schedules
    restart: always
    env_file:
      - .env
    ports:
      - "6000:6000"
    networks:
      - schedules_network
  
  read_schedules:
    image: ${{ secrets.DOCKER_USERNAME }}/read_schedules:latest
    container_name: read_schedules
    restart: always
    env_file:
      - .env
    ports:
      - "6001:6001"
    networks:
      - schedules_network
  
  update_schedules:
    image: ${{ secrets.DOCKER_USERNAME }}/update_schedules:latest
    container_name: update_schedules
    restart: always
    env_file:
      - .env
    ports:
      - "6003:6003"
    networks:
      - schedules_network
  
  delete_schedules:
    image: ${{ secrets.DOCKER_USERNAME }}/delete_schedules:latest
    container_name: delete_schedules
    restart: always
    env_file:
      - .env
    ports:
      - "6002:6002"
    networks:
      - schedules_network

networks:
  schedules_network:
    driver: bridge
```

## 📦 Building Docker Images Manually
If you need to manually build the Docker images:
```bash
cd BACKEND/schedules_management/created_schedules
docker build -t your-docker-username/created_schedules .
```
Replace `created_schedules` with the other microservices when necessary.

## 📌 Stopping the Services
```bash
docker-compose down
```

## 🚀 Deployment
To push the images to Docker Hub:
```bash
docker login
docker push your-docker-username/created_schedules:latest
docker push your-docker-username/read_schedules:latest
docker push your-docker-username/update_schedules:latest
docker push your-docker-username/delete_schedules:latest
```

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

📌 **Maintainer:** YOUR NAME  
📩 **Contact:** your.email@example.com
