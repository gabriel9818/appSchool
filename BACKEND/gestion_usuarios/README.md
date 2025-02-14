# 🛠️ User Management Service

## 📌 Project Overview
The **User Management Service** is a microservices-based backend application that handles user-related operations such as:

- 📥 **Creating users**
- 🔍 **Reading user data**
- ✏️ **Updating user details**
- 🗑️ **Deleting users**

Each operation is managed as an independent microservice, making the system scalable and modular.

## 📂 Directory Structure

```bash
gestion_usuarios/
├── .gitignore
├── create_users/
│   ├── Dockerfile
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   └── index.js
│   └── routes/
│       └── userRoutes.js
├── delete_users/
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   └── index.js
│   └── routes/
│       └── userRoutes.js
├── read_users/
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   └── index.js
│   └── routes/
│       └── userRoutes.js
└── update_users/
    ├── Dockerfile
    ├── index.js
    ├── package-lock.json
    ├── package.json
    ├── controllers/
    │   └── userController.js
    ├── models/
    │   ├── User.js
    │   └── index.js
    └── routes/
        └── userRoutes.js
```

## 🏗️ Technologies Used
- **Node.js** 🌍 - Backend runtime
- **Express.js** 🚀 - Fast and minimal web framework
- **MongoDB** 🍃 - NoSQL database for user data storage
- **Docker** 🐳 - Containerization for microservices

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/user-management.git
cd user-management
```

### 2️⃣ Install Dependencies for Each Service
```bash
cd create_users && npm install
cd ../delete_users && npm install
cd ../read_users && npm install
cd ../update_users && npm install
```

### 3️⃣ Run the Services
Each microservice can be started individually:
```bash
cd create_users && npm start
cd delete_users && npm start
cd read_users && npm start
cd update_users && npm start
```

Or run all services using Docker Compose (if configured):
```bash
docker-compose up --build
```

## 🛠️ API Endpoints
Each microservice exposes RESTful endpoints:

### ➕ Create User (`create_users`)
```http
POST /api/users
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

### 🔍 Read Users (`read_users`)
```http
GET /api/users
```
```http
GET /api/users/:id
```

### ✏️ Update User (`update_users`)
```http
PUT /api/users/:id
```
**Request Body:**
```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

### 🗑️ Delete User (`delete_users`)
```http
DELETE /api/users/:id
```

## 📌 Future Improvements
- 🔒 **Authentication & Authorization** (JWT-based security)
- 📊 **User activity logging**
- 📬 **Email notifications** for account updates

## 📜 License
This project is licensed under the **MIT License**.

---

🚀 **Developed with ❤️ for scalable user management!**
