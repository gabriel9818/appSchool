# Reports Materials Microservice

## 📌 Overview
The `reports_materials` microservice is responsible for generating reports based on materials retrieved from the `read_materials` microservice. It fetches material data through a **REST API**, stores reports in a **MariaDB database**, and provides endpoints for retrieving reports.

## 🚀 Features
- Fetches material data from the `read_materials` microservice.
- Stores generated reports in MariaDB.
- Provides an API endpoint to retrieve reports by subject.
- Implements logging using `loguru`.
- Supports Prometheus for monitoring and performance metrics.
- Dockerized for easy deployment.

## 📦 Requirements
- **Python 3.11+**
- **FastAPI** for API handling
- **SQLAlchemy** for database interactions
- **MariaDB** as the database
- **Docker** (optional, for containerized deployment)
- **Prometheus** (optional, for monitoring)
  
## 🔧 Installation & Setup

1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd reports_materials
```

2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```
4️⃣ Run the Microservice

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```
## 📡 API Endpoints

✅ Health Check
```bash
GET /
```
Response:
```bash
{
    "message": "Reports Materials microservice is running"
}
```
📑 Generate & Retrieve Report
```bash
GET /reports/{subject_id}
```
Response:

```bash
{
    "message": "Report generated",
    "report": {
        "id": 1,
        "subject_id": "Programming",
        "generated_at": "2025-02-13T12:00:00",
        "report_data": "[...]"
}

```

## 📊 Monitoring with Prometheus 

1️⃣ Expose Metrics in main.py

```bash
from prometheus_fastapi_instrumentator import Instrumentator
Instrumentator().instrument(app).expose(app)
```
3️⃣ Access the Interfaces

```bash
Prometheus: http://localhost:8000/metrics
```

