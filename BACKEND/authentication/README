
# 🔐 Authentication Microservice

## 📌 Project Overview

The **Authentication Microservice** is responsible for handling user authentication and authorization. It validates user credentials, generates JWT tokens, and logs authentication actions. This service interacts with other microservices, such as `read_users` to fetch user data and `logs_service` to store login records.

---

## 📂 Directory Structure

```plaintext
BACKEND/authentication/
│── Dockerfile
│── index.js
│── package.json
│── .gitignore
│── controllers/
│   └── authController.js
│── models/
│   ├── User.js
│   └── index.js
│── routes/
│   └── authRoutes.js
│── utils/
│   └── jwt.js
```

---

## 🛠️ Technologies Used

| Technology    | Description                                      |
|--------------|------------------------------------------------|
| **Node.js**  | JavaScript runtime for executing backend logic. |
| **Express.js** | Lightweight web framework for building REST APIs. |
| **MySQL**    | Database used to store user authentication data. |
| **Sequelize** | ORM for managing MySQL connections and models. |
| **JWT (jsonwebtoken)** | Library for generating and verifying authentication tokens. |
| **bcrypt**   | Library for hashing and verifying passwords. |
| **dotenv**   | Loads environment variables from `.env` files. |
| **axios**    | Used for HTTP requests to other microservices. |

---

## 🚀 Setup & Installation

### 🐳 Running with Docker

```sh
docker build -t authentication-service .
docker run -p 3006:3006 --env-file .env authentication-service
```

### 💻 Running Locally

#### 1️⃣ Clone the repository:

```sh
git clone https://github.com/your-repo/authentication-service.git
cd authentication-service
```

#### 2️⃣ Install dependencies:

```sh
npm install
```

#### 3️⃣ Set up environment variables in a `.env` file:

```ini
PORT=3006
DB_HOST=your-database-host
DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-password
JWT_SECRET=your-secret-key
LOGS_SERVICE_URL=http://logs-service/logs
READ_USERS_SERVICE_URL=http://read-users-service/api/users
```

#### 4️⃣ Start the server:

```sh
node index.js
```

---

## 🛡️ API Endpoints

### 🔗 Authentication Endpoints

| Method | Endpoint            | Description                                        |
|--------|--------------------|------------------------------------------------|
| **POST** | `/api/auth/login`  | Authenticates a user and returns a JWT token. |

### 🔑 Login Example

#### Request:

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Response:

```json
{
  "message": "Authentication successful",
  "token": "your-jwt-token"
}
```

---

## 🔄 Interactions with Other Microservices

| Microservice   | Purpose                                              |
|---------------|------------------------------------------------------|
| **read_users**  | Retrieves user information for authentication. |
| **logs_service** | Stores login activity and authentication attempts. |

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ✨ Contributors

**Your Name** - Developer & Maintainer 💻

---

## 📌 Notes

✅ Make sure to configure `.env` correctly before running.
✅ This service should be used alongside other user management microservices for full functionality.
✅ Use a strong `JWT_SECRET` to enhance security.



