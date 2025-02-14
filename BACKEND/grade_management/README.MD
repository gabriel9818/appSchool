# 🎓 Grade Management Microservices

## Overview 🏫
The **Grade Management System** is a set of microservices designed to handle student grades efficiently. Each microservice is responsible for a specific CRUD operation: creating, reading, updating, and deleting grades. The system is built using **Bun**, a fast JavaScript runtime, and communicates with a **PostgreSQL** database.

## Microservices 🛠️
Each service runs independently and is containerized using **Docker**:
- **created_grades** (Port: 2000) ➝ Creates new grades.
- **read_grades** (Port: 2001) ➝ Fetches stored grades.
- **delete_grades** (Port: 2002) ➝ Deletes grades by ID.
- **update_grades** (Port: 2003) ➝ Updates existing grades.

## Technologies Used 🚀
- **Bun** - A fast JavaScript runtime ([Bun Docs](https://bun.sh))
- **Express.js** - Backend framework
- **PostgreSQL** - Database management system
- **Docker & Docker Compose** - Containerization
- **TypeScript** - Strongly typed JavaScript
- **dotenv** - Environment variable management

## Project Structure 📁
```plaintext
BACKEND/
│── grade_management/
│   ├── created_grades/       # Create new grades
│   ├── read_grades/          # Read existing grades
│   ├── update_grades/        # Update existing grades
│   ├── delete_grades/        # Delete grades
│   ├── docker-compose.yml    # Service orchestration
│   ├── .gitignore            # Ignored files
│   ├── README.md             # Documentation
```

## Setup & Installation ⚙️
### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_REPO/grade_management.git
cd grade_management
```

### 2️⃣ Set up environment variables 📝
Create a `.env` file in each microservice directory with the following:
```env
DB_HOST=your-db-host
DB_PORT=5432
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
APP_PORT=your-service-port
```

### 3️⃣ Start the services using Docker 🐳
```bash
docker-compose up -d
```

## API Endpoints 🌍
| Method | Endpoint            | Description                   |
|--------|--------------------|-------------------------------|
| POST   | `/api/v1/grades`   | Create a new grade           |
| GET    | `/api/v1/grades`   | Retrieve all grades          |
| PUT    | `/api/v1/grades/:id` | Update an existing grade     |
| DELETE | `/api/v1/grades/:id` | Delete a grade by ID         |

## Running Locally 🏗️
To run a service individually, navigate to its directory and use **Bun**:
```bash
bun run index.ts
```

## Deployment 🚀
### Build and push Docker images:
```bash
docker build -t your-dockerhub-username/created_grades ./created_grades

docker push your-dockerhub-username/created_grades
```
Repeat for all services.

### Deploy using Docker Compose:
```bash
docker-compose up -d
```

## Contributing 🤝
Feel free to fork this repository, submit issues, or create pull requests to improve the project!

## License 📜
This project is licensed under the **MIT License**.
