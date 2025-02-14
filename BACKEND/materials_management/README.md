# Materials Management Microservice

This microservice is responsible for managing materials within the system. It includes functionalities to create, read, update, and delete materials from the database.

## 🚀 Features

- **Create Materials**: Add new materials to the database.
- **Read Materials**: Retrieve all materials or specific ones.
- **Update Materials**: Modify existing materials.
- **Delete Materials**: Remove materials from the database.

## 📂 Project Structure

```
materials_management/
│── created_materials/
│── read_materials/
│── update_materials/
│── delete_materials/
│── db.py
│── app.py
│── Dockerfile
│── requirements.txt
│── .env
```

## 🛠 Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-repo/materials_management.git
cd materials_management
```

### 2️⃣ Install dependencies
```sh
pip install -r requirements.txt
```

### 3️⃣ Set up environment variables
Create a `.env` file and configure the database connection:
```ini
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
```

### 4️⃣ Run the application
```sh
python app.py
```

## 🐳 Running with Docker

### 1️⃣ Build the Docker image
```sh
docker build -t materials_management .
```

### 2️⃣ Run the Docker container
```sh
docker run -p 5000:5000 materials_management
```

## 📄 API Endpoints

### ➕ Create Materials
- **Endpoint:** `POST /materials`
- **Description:** Adds a new material.
- **Request Body:**
  ```json
  {
    "name": "Material Name",
    "subject": "Material Subject",
    "description": "Material Description"
  }
  ```

### 🔍 Read Materials
- **Endpoint:** `GET /materials`
- **Description:** Retrieves all materials from the database.

### ✏️ Update Materials
- **Endpoint:** `PUT /materials/{id}`
- **Description:** Updates an existing material.
- **Request Body:**
  ```json
  {
    "name": "Updated Material Name",
    "subject": "Updated Subject",
    "description": "Updated Description"
  }
  ```

### ❌ Delete Materials
- **Endpoint:** `DELETE /materials/{id}`
- **Description:** Deletes a material by ID.

## 📜 Swagger Documentation
Once running, open:

[Swagger UI](http://localhost:5000/swagger/index.html)

